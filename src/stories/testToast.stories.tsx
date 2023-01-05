import { ComponentMeta,ComponentStory } from '@storybook/react'

import { TestToast } from '@/components/TestToast'
import { ToastMargin,ToastPosition } from '@/constants/toastConditions'

export default {
  title: 'Test Toast',
  component: TestToast,
  argTypes: {
    position: {
      control: 'select',
      options: Object.values(ToastPosition),
    },
    autoCloseTime: {
      options: [1000, 2000, 3000, 4000, 5000],
      control: { type: 'radio' },
    },
    margin: {
      control: 'select',
      options: Object.values(ToastMargin),
    },
  },
} as ComponentMeta<typeof TestToast>;


const Template: ComponentStory<typeof TestToast> = (args) => <TestToast {...args} />


export const Default = Template.bind({})
Default.args = {
  position: ToastPosition.BOTTOM_RIGHT,
  margin:ToastMargin.LARGE
}

