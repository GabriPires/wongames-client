import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
  // args: {}
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />

Logged.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}

Logged.args = {
  username: 'John Doe'
}
