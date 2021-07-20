import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFrament } from 'graphql/fragments/highlight'

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: $date }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upcomingGames: games(
      where: { release_date_gt: $date }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    freeGames: games(where: { price: 0 }, sort: "release_date:desc", limit: 8) {
      ...GameFragment
    }

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFrament
        }
      }

      popularGames {
        title
        highlight {
          ...HighlightFrament
        }
        games(limit: 8) {
          ...GameFragment
        }
      }

      upcomingGames {
        title
        highlight {
          ...HighlightFrament
        }
      }

      freeGames {
        title
        highlight {
          ...HighlightFrament
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFrament}
`
