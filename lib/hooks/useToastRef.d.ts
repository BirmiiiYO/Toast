/// <reference types="react" />
import { TToastProps } from '@/types/toastParams';
export declare const useToastRef: () => {
    toastRef: import("react").RefObject<{
        addMessage: (toast: TToastProps) => void;
    }>;
    addToast: (options: TToastProps) => void;
};
