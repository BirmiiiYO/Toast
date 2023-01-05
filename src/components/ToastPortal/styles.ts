import styled from 'styled-components'

import { setMargin } from '@/utilities/setMargin'
import { setPosition } from '@/utilities/setPosition'

import { ToastPortalProps } from './types'

export const ToastContainer =
  styled.div <
  ToastPortalProps >
  `
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: ${({ margin }) => setMargin(margin)}px;
  position: fixed;
  ${({ position }) => setPosition(position)}
`
