/// <reference types="react" />
import { TToastProps } from '@/types/toastParams';
import { ToastBlockProps } from './types';
declare type RefType = {
    addMessage: (toast: TToastProps) => void;
};
export declare const ToastContainer: import("react").ForwardRefExoticComponent<ToastBlockProps & import("react").RefAttributes<RefType>>;
export {};
