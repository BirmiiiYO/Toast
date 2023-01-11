import styled from 'styled-components'

import { setMargin } from '@/utilities/setMargin'
import { setPosition } from '@/utilities/setPosition'

import { ToastBlockProps } from './types'

export const ToastBlock =
  styled.div <
  ToastBlockProps >
  `
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: ${({ margin }) => setMargin(margin)}px;
  position: fixed;
  ${({ position }) => setPosition(position)}
`
