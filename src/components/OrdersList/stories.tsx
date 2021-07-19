import { Story, Meta } from '@storybook/react'
import OrdersList from '.'

import itemsMock from './mock'

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '85rem', margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
