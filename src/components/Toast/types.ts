import { Mode,Animation } from "@/types/toastParams"

export type ToastProps = {
  title: string,
  mode: Mode,
  description: string,
  animationType: Animation,
  backgroundColor?: string,
  onClose: () => void,
}

export type ToastContainerProps = {
  mode: Mode
  backgroundColor?: string,
  animationType: Animation
}
