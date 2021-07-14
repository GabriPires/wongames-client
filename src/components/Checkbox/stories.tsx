import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {}
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
