import { render, screen } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CardDropdown from '.'

describe('<CardDropdown />', () => {
  // it('should render cartIcon ans its badge', () => {
  //   render(<CardDropdown items={items} total="R$ 300,00" />)

  //   expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  //   expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  // })

  it('should render dropdown content with cart items and total', () => {
    render(<CardDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByText(/R\$ 300/i)).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
