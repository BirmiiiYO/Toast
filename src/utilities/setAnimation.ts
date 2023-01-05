import { keyframes } from 'styled-components'

import { ToastAnimation } from '@/constants/toastConditions'
import { Animation } from '@/types/toastParams'

const scale = keyframes`
 0% { transform: scale(0) }
 100% {transform: scale(1) }
`

const move = keyframes`
 0% { right: -120%; }
 100% { right: 0%; }
`

export const setAnimation = (animation: Animation) => {
  if (animation === ToastAnimation.SCALE) {
    return scale
  }

  if (animation === ToastAnimation.MOVE) {
    return move
  }
}
