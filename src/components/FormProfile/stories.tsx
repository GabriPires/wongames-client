import { Story, Meta } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'FormProfile',
  component: FormProfile
  // args: {}
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '86rem', margin: 'auto' }}>
    <FormProfile {...args} />
  </div>
)
