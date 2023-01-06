import { IToast, TToastProps } from '@/types/toastParams';
declare class Toast {
    private static instance;
    toasts: IToast[];
    constructor();
    getAllToasts: () => IToast[];
    addToast: (toast: IToast) => void;
    removeToast: (toastId: string) => void;
    createToast: (toastOptions: TToastProps) => IToast;
}
declare const toastService: Toast;
export default toastService;
