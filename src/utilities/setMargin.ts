import { Margin } from '@/types/toastParams';

import { ToastMargin } from '@/constants/toastConditions'

const setMargin = (margin: Margin) => {
  switch (margin) {
    case ToastMargin.LARGE: {
      return  24
    }
    case ToastMargin.MEDIUM: {
      return 16
    }

    case ToastMargin.SMALL: {
      return 8
    }
    default:
      return 0
  }
}

export { setMargin }
