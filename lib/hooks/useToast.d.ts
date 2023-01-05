/// <reference types="react" />
import { TToastProps } from '@/types/toastParams';
export declare const useToast: () => {
    toastRef: import("react").RefObject<{
        addMessage: (toast: TToastProps) => void;
    }>;
    addToast: (options: TToastProps) => void;
};
