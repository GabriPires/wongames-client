import { Story, Meta } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
  // args: {}
} as Meta

export const Default: Story = (args) => <CartIcon {...args} />
export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 3
}
