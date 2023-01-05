import { css } from 'styled-components'

import { ToastPosition } from '@/constants/toastConditions'
import { Position } from '@/types/toastParams'

const setPosition = (position: Position) => {
  switch (position) {
    case ToastPosition.TOP_LEFT:
      return css`
        left: 10px;
        top: 10px;
      `
    case ToastPosition.TOP_RIGHT:
      return css`
        right: 10px;
        top: 10px;
      `
    case ToastPosition.BOTTOM_LEFT:
      return css`
        bottom: 10px;
        left: 10px;
      `
    default:
      return css`
        bottom: 10px;
        right: 10px;
      `
  }
}

export { setPosition }
