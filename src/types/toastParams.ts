export type Mode = 'success' | 'warning' | 'info' | 'error'
export type Animation = 'scale' | 'move'
export type Margin = 'none' | 'small' | 'medium' | 'large'
export type Position =
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'


export type TToastProps = {
  mode: Mode
  description: string
  title: string
  animationType: Animation
  backgroundColor?: string
}

export interface IToast extends TToastProps {
  id: string
}

