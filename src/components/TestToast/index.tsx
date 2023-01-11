import { FC } from 'react'

import { ToastContainer } from '@/components/ToastPortal'
import { ToastBlockProps } from '@/components/ToastPortal/types'
import {
  ToastAnimation,
  ToastMode,
} from '@/constants/toastConditions'
import { useToast} from '@/hooks/useToast'

import { Button } from './styles'

export const TestToast: FC<ToastBlockProps> = (props) => {
  const { toastRef, addToast } = useToast()
  const { position } = props
  const addSuccess = () =>
    addToast({
      title: 'Success',
      mode: ToastMode.SUCCESS,
      description: 'Success message',
      animationType: ToastAnimation.SCALE,
      position,
    })

  const addInfo = () =>
    addToast({
      title: 'Info',
      mode: ToastMode.INFO,
      description: 'Info message',
      animationType: ToastAnimation.MOVE,
      position,
    })

  const addWarning = () =>
    addToast({
      title: 'Warning',
      mode: ToastMode.WARNING,
      description: 'Warning message',
      animationType: ToastAnimation.SCALE,
      position,
    })

  const addError = () =>
    addToast({
      title: 'Error',
      mode: ToastMode.ERROR,
      description: 'Error message',
      animationType: ToastAnimation.MOVE,
      position,
    })
    const buttons = [{id:1, func:addSuccess, text: 'Success Toast'},
    {id:2,func:addInfo, text: 'Info Toast'},
    {id:3,func:addWarning, text: 'Warning Toast'},
    {id:4,func:addError, text: 'Error Toast'}]

  return (
    <>
      {buttons.map(btn => <Button key={btn.id} onClick={btn.func}>{btn.text}</Button>)}
      <ToastContainer ref={toastRef} {...props} />
    </>
  )
}
