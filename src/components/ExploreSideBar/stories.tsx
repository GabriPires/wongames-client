import { Story, Meta } from '@storybook/react'
import ExploreSideBar from '.'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
  // args: {}
} as Meta

export const Default: Story = (args) => <ExploreSideBar {...args} />
