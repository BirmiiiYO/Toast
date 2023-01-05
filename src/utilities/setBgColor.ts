import { Mode } from '@/types/toastParams';
import { ToastMode } from '@/constants/toastConditions';
import {theme } from '@/theme'

export const setBgColor = ( mode:Mode, backgroundColor:string ) => {
    if (backgroundColor) {
      return backgroundColor
    } else {
      switch (mode) {
        case ToastMode.SUCCESS: {
          return theme.colors.success
        }
        case ToastMode.WARNING: {
          return theme.colors.warning
        }
        case ToastMode.ERROR: {
          return theme.colors.error
        }
        default:
          return theme.colors.info
      }
    }
  };