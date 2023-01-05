/// <reference types="react" />
import { TToastProps } from '@/types/toastParams';
import { ToastPortalProps } from './types';
declare type RefType = {
    addMessage: (toast: TToastProps) => void;
};
export declare const ToastPortal: import("react").ForwardRefExoticComponent<ToastPortalProps & import("react").RefAttributes<RefType>>;
export {};
