import styled from "styled-components"

import { setAnimation } from '@/utilities/setAnimation'
import { setBgColor } from '@/utilities/setBgColor'

import { ToastBlockProps } from './types'

export const ToastInfo = styled.div``

export const ToastBlock =
  styled.div <
  ToastBlockProps >
  `
align-items: center;
animation-duration: 0.5s;
animation-name: ${({ animationType }) =>
    setAnimation(animationType)};
background-color: ${({ mode, backgroundColor }) =>
    setBgColor(mode, backgroundColor)};
border-radius: 5px;
box-sizing: border-box;
color: white;
display:flex;
justify-content: start;
max-width: 300px;
min-height: 100px;
position:relative;
`

export const ToastIcon = styled.img`
  height: 30px;
  padding: 0 20px;
  width: 30px;
`

export const ToastClose = styled.img`
  cursor: pointer;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
`

export const ToastTitle = styled.h1`
  font-size: 24px;
  margin: 0px;
  overflow: hidden;
  width: 200px;
`

export const ToastDescription = styled.span`
  font-size: 18px;
  max-width: 200px;
`
