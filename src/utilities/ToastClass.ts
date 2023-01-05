import { v4 as uuid } from 'uuid'

import { IToast,TToastProps } from '@/types/toastParams'

class Toast {
  private static instance: Toast

  toasts!: IToast[]

  constructor() {
    if (typeof Toast.instance === 'object') {
      return Toast.instance
    }
    this.toasts = []
    Toast.instance = this
    return this
  }

  public getAllToasts = () => {
    return this.toasts
  }

  public addToast = (toast: IToast) => {
    if(this.toasts.length === 3) {
      this.toasts.splice(0,1,toast)
    } else {
      this.toasts.push(toast)
    }
  }

  public removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter(toast => toast.id !== toastId)
  }

  public generateToast = (toastOptions: TToastProps): IToast => ({
    id: uuid(),
    ...toastOptions,
  })
}

const toastService = new Toast()

export default toastService
