import iconClose from '@/assets/svg/iconClose.svg'
import { ToastProps } from './types'
import { ToastClose,ToastContainer,ToastDescription,ToastIcon,ToastInfo,ToastTitle } from './styles'
import { getImage } from '@/utilities/getImage'
import { ToastAnimation } from '@/constants/toastConditions'

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
    <ToastContainer
    mode={mode}
    backgroundColor={backgroundColor}
    animationType={animationType}
  >
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
  </ToastContainer>
  )
}
