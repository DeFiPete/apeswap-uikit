import { InputHTMLAttributes } from "react";
export declare enum sizes {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare const togglePadding: {
    sm: {
        x: number;
        y: number;
    };
    md: {
        x: number;
        y: number;
    };
    lg: {
        x: number;
        y: number;
    };
};
export declare const fontSizes: {
    sm: number;
    md: number;
    lg: number;
};
export declare type sizeProps = `${sizes}`;
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    checked?: boolean;
    labels: [string, string];
    size?: sizeProps;
}
