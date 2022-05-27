import React from "react";
export declare enum sizes {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare const fontSizes: {
    sm: number;
    md: number;
    lg: number;
};
export declare const dropdownPadding: {
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
export declare const dropdownItemPadding: {
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
declare type sizeProps = `${sizes}`;
export interface DropdownProps {
    component: React.ReactNode;
    size?: sizeProps;
    [key: string]: any;
}
export interface DropdownItemProps {
    onClick?: () => void;
    url?: string;
    active?: boolean;
    size?: sizeProps;
}
export declare type Position = "top" | "top-right" | "bottom";
export interface PositionProps {
    position?: Position;
}
export {};
