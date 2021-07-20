import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSideBar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSideBar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSideBar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: { limit: 15 }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'METAL GEAR SOLID 2 SUBSTANCE',
                    slug: 'metal-gear-solid-2-substance',
                    cover: {
                      url: '/uploads/metal_gear_solid_2_substance_329a02cf2b.jpg'
                    },
                    developers: [
                      {
                        name: 'Konami Computer Entertainment Japan, Inc.'
                      }
                    ],
                    price: 49.89,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // it starts without data
    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    // we wait until we have data to get the elements
    // get -> tem certeza do elemento
    // query -> nao tem o elemento
    // find -> processos assincronos
    expect(await screen.findByTestId('Mock ExploreSideBar')).toBeInTheDocument()

    expect(await screen.findByText(/metal gear solid/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
