import React, { InputHTMLAttributes } from "react";
export declare enum positions {
    TOP = "top",
    BOTTOM = "bottom"
}
export declare enum sizes {
    XSMALL = "xsm",
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare const fontSizes: {
    xsm: number;
    sm: number;
    md: number;
    lg: number;
};
export declare const selectPadding: {
    xsm: number;
    sm: number;
    md: number;
    lg: number;
};
export declare const selectedExtraPadding: {
    xsm: number;
    sm: number;
    md: number;
    lg: number;
};
export declare const selectItemPadding: {
    xsm: number;
    sm: number;
    md: number;
    lg: number;
};
declare type sizeProps = `${sizes}`;
declare type positionProps = `${positions}`;
export interface SelectProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    active?: number | string;
    size?: sizeProps;
    width?: string | number;
    position?: positionProps;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface SelectItemProps {
    onClick?: (value: number | string) => void;
    url?: string;
    active?: boolean;
    size?: sizeProps;
    value: number | string;
}
export {};
