import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ExploreSideBar from '.'

import items from './mock'

describe('<ExploreSideBar />', () => {
  it('should render the headings', () => {
    const { container } = renderWithTheme(<ExploreSideBar items={items} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSideBar items={items} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})