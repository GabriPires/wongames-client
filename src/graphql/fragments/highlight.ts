import { gql } from '@apollo/client'

export const HighlightFrament = gql`
  fragment HighlightFrament on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
