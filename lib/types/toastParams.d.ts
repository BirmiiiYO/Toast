export declare type Mode = 'success' | 'warning' | 'info' | 'error';
export declare type Animation = 'scale' | 'move';
export declare type Margin = 'none' | 'small' | 'medium' | 'large';
export declare type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export declare type TToastProps = {
    mode: Mode;
    description: string;
    title: string;
    animationType: Animation;
    backgroundColor?: string;
    position: Position;
};
export interface IToast extends TToastProps {
    id: string;
}
