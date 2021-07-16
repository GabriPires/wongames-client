import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    const { container } = renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )

    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
