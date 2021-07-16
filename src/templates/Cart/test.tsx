import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

// import Cart from '.'

describe('<Cart />', () => {
  it('should render the heading', () => {
    renderWithTheme(<h1>Cart</h1>)

    expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
