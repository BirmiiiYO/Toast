import { setBgColor } from '@/utilities/setBgColor';
import {setAnimation} from '@/utilities/setAnimation'
import styled from 'styled-components'
import {ToastContainerProps} from './types'

export const ToastInfo = styled.div``

export const ToastContainer = styled.div<ToastContainerProps>`
position:relative;
max-width: 300px;
min-height: 100px;
display:flex;
align-items: center;
justify-content: start;
background-color: ${({ mode, backgroundColor}) => setBgColor(mode,backgroundColor)};
color: white;
border-radius: 5px;
box-sizing: border-box;
animation-name: ${({ animationType}) => setAnimation(animationType)};
animation-duration: 0.5s;
`

export const ToastIcon = styled.img`
  height: 30px;
  padding: 0  20px;
  width: 30px;
`

export const ToastClose = styled.img`
  height: 20px;
  position: absolute;
  cursor:pointer;
  right: 10px;
  top: 10px;
  width: 20px;
`

export const ToastTitle = styled.h1`
  width:200px;
  overflow: hidden;
  font-size: 24px;
  margin: 0px;
`

export const ToastDescription = styled.span`
  max-width:200px;
  font-size: 18px;
`