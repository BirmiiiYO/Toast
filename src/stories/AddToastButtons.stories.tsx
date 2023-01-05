import { ComponentMeta,ComponentStory } from '@storybook/react'

import { AddToastButtons } from '@/components/AddToastButtons'
import { ToastMargin,ToastPosition } from '@/constants/toastConditions'

export default {
  title: 'AddToastButtons',
  component: AddToastButtons,
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
} as ComponentMeta<typeof AddToastButtons>

const Template: ComponentStory<typeof AddToastButtons> = (args) => <AddToastButtons {...args} />


export const Default = Template.bind({})
Default.args = {
  position: ToastPosition.BOTTOM_RIGHT,
  margin:ToastMargin.LARGE
}

