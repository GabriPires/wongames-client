import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from 'components/CartList/mock'

import CardDropdown from '.'

describe('<CardDropdown />', () => {
  it('should render cartIcon ans its badge', () => {
    renderWithTheme(<CardDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    renderWithTheme(<CardDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByText(/R\$ 300/i)).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
