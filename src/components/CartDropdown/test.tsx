import { render, screen } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CardDropdown from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'

describe('<CardDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 300'
    }
    render(<CardDropdown />, { cartProviderProps })
  })
  it('should render cartIcon ans its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    expect(screen.getByText(/R\$ 300/i)).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
