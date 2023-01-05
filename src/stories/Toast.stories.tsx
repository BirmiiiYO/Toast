import { ComponentMeta,ComponentStory } from '@storybook/react'

import { Toast } from '@/components/Toast'
import { ToastAnimation,ToastMode } from '@/constants/toastConditions'


export default {
  title: 'Toast',
  component: Toast,
  argTypes: {
    mode: {
      options: Object.values(ToastMode),
      control: { type: 'radio' },
    },
    backgroundColor: {
      control: 'color',
    },
    animationType: {
      options: Object.values(ToastAnimation),
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
  mode: ToastMode.INFO,
  description: 'Info Toast',
  animationType: ToastAnimation.MOVE,
}

export const Success = Template.bind({})
Success.args = {
  title: 'Success',
  mode: ToastMode.SUCCESS,
  description: 'Success Toast',
  animationType: ToastAnimation.SCALE,
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
  mode: ToastMode.WARNING,
  description: 'Warning Toast',
  animationType: ToastAnimation.MOVE,
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
  description: 'Error Toast',
  mode: ToastMode.ERROR,
  animationType: ToastAnimation.SCALE,
}
