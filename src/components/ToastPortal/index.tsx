import  { forwardRef,useEffect, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'

import { Toast } from '@/components/Toast'
import { ToastMargin, ToastPosition } from '@/constants/toastConditions'
import { useToast } from '@/hooks/useToast'
import { TToastProps } from '@/types/toastParams'
import toastService from '@/utilities/ToastClass'

import { ToastContainer } from './styles'
import { ToastPortalProps } from './types'

type RefType = {
  addMessage: (toast: TToastProps) => void
}

export const ToastPortal = forwardRef<RefType, ToastPortalProps>(
  (
    {
      autoClose = false,
      autoCloseTime = 4000,
      position = ToastPosition.TOP_RIGHT,
      margin = ToastMargin.NONE,
    },
    ref
  ) => {
    const { toasts, removeToast, getAllToasts, generateToast, addToast } = toastService
    const { loaded, portalId } = useToast()

    const [removingId, setRemovingId] = useState('')
    const [toastsLength, setToastsLength] = useState(getAllToasts().length)

    useEffect(() => {
      setToastsLength(toasts.length)
    }, [toasts.length])

    useEffect(() => {
      if (autoClose && toasts.length) {
        const lastId = toasts[toasts.length - 1].id
        setTimeout(() => setRemovingId(lastId), autoCloseTime)
      }
    }, [toastsLength, autoClose, autoCloseTime, toasts])

    useEffect(() => {
      if (removingId) {
        removeToast(removingId)
        setToastsLength(getAllToasts().length)
      }
    }, [removingId, setToastsLength, getAllToasts, removeToast])

    useImperativeHandle(ref, () => ({
      addMessage(toast: TToastProps) {
        const newToast = generateToast(toast)
        addToast(newToast)
        setToastsLength(toasts.length)
      },
    }))

    const handleClose = (id: string) => () => {
      removeToast(id)
      setToastsLength(getAllToasts().length)
    }

    return loaded
      ? ReactDOM.createPortal(
          <ToastContainer
            position={position}
            autoClose={autoClose}
            autoCloseTime={autoCloseTime}
            margin={margin}
          >
            {toasts
              .map(({ title, id, mode, description, animationType, backgroundColor }) => (
                <Toast
                  title={title}
                  key={id}
                  mode={mode}
                  description={description}
                  backgroundColor={backgroundColor}
                  animationType={animationType}
                  onClose={handleClose(id)}
               />
              ))}
          </ToastContainer>,
          document.getElementById(portalId)!
        )
      : null
  }
)
