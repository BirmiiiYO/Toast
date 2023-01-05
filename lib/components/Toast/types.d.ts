import { Animation, Mode } from '@/types/toastParams';
export declare type ToastProps = {
    title: string;
    mode: Mode;
    description: string;
    animationType: Animation;
    backgroundColor?: string;
    onClose: () => void;
};
export declare type ToastBlockProps = {
    mode: Mode;
    backgroundColor?: string;
    animationType: Animation;
};
