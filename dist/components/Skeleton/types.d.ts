import { BoxProps } from "theme-ui";
export declare enum animation {
    WAVES = "waves",
    PULSE = "pulse"
}
export declare enum variant {
    RECT = "rect",
    CIRCLE = "circle"
}
declare type Animation = `${animation}`;
declare type Variant = `${variant}`;
export interface SkeletonProps extends BoxProps {
    animation?: Animation;
    variant?: Variant;
    width?: string | number;
    height?: string | number;
}
export {};
