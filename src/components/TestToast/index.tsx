import React, { FC } from 'react'

import { ToastPortal } from '@/components/ToastPortal'
import { ToastPortalProps } from '@/components/ToastPortal/types'
import {
  ToastAnimation,
  ToastMode,
} from '@/constants/toastConditions'
import { useToastRef } from '@/hooks/useToastRef'

import { Button } from './styles'

export const TestToast: FC<ToastPortalProps> = (props) => {
  const { toastRef, addToast } = useToastRef()
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

  return (
    <>
      <Button onClick={addSuccess}>Success Toast</Button>
      <Button onClick={addInfo}>Info Toast</Button>
      <Button onClick={addWarning}>Warning Toast</Button>
      <Button onClick={addError}>Error Toast</Button>
      <ToastPortal ref={toastRef} {...props} />
    </>
  )
}
