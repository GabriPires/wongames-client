import { Story, Meta } from '@storybook/react'
import ExploreSideBar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar {...args} />
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar
    initialValues={{ windows: true, sort_by: 'low-to-high' }}
    {...args}
  />
)
