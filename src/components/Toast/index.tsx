import iconClose from '@/assets/svg/iconClose.svg'
import { ToastAnimation } from '@/constants/toastConditions'
import { getImage } from '@/utilities/getImage'

import {
  ToastBlock,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastInfo,
  ToastTitle,
} from './styles'
import { ToastProps } from './types'

export const Toast = ({
  title = 'Toast title',
  mode = 'info',
  description = 'Toast description',
  backgroundColor,
  animationType = ToastAnimation.SCALE,
  onClose,
}: ToastProps) => {
  const onToastClose = () => {
    onClose()
  }

  return (
    <ToastBlock
      mode={mode}
      backgroundColor={backgroundColor}
      animationType={animationType}>
      <ToastIcon src={getImage(mode)} />
      <ToastInfo>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </ToastInfo>
      <ToastClose
        onClick={onToastClose}
        src={iconClose}
        alt="close notification"
      />
    </ToastBlock>
  )
}
