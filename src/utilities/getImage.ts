import iconError from '@/assets/svg/iconError.svg'
import iconInfo from '@/assets/svg/iconInfo.svg'
import iconSuccess from '@/assets/svg/iconSuccess.svg'
import iconWarning from '@/assets/svg/iconWarning.svg'
import { ToastMode } from '@/constants/toastConditions'
import { Mode } from '@/types/toastParams'

export const getImage = (mode: Mode): string => {
  switch (mode) {
    case ToastMode.ERROR:
      return iconError
    case ToastMode.SUCCESS:
      return iconSuccess
    case ToastMode.INFO:
      return iconInfo
    case ToastMode.WARNING:
      return iconWarning
    default:
      return iconInfo
  }
}
