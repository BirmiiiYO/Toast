import { useRef } from 'react'

import { ToastContainer } from '@/components/ToastContainer'
import { TToastProps } from '@/types/toastParams'

type ToastPortalRef = React.ElementRef<typeof ToastContainer>

export const useToastRef = () => {
  const toastRef = useRef<ToastPortalRef>(null)

  const addToast = (options: TToastProps) => {
    if (toastRef.current) {
      toastRef.current.addMessage({ ...options })
    }
  }

  return {
    toastRef,
    addToast,
  }
}
