import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { SpaceProps } from "styled-system";
import { ButtonProps } from "../ButtonNew";
import { sizeProps, variantProps } from "../ButtonNew/types";
export declare const sizes: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly DANGER: "danger";
    readonly SUCCESS: "success";
    readonly TERTIARY: "tertiary";
};
export declare type Sizes = typeof sizes[keyof typeof sizes];
export declare type Variants = typeof variants[keyof typeof variants];
declare type ButtonSquareTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps;
export declare type ButtonSquareProps = {
    variant?: variantProps;
    size?: sizeProps;
    [key: string]: any;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    as?: "a" | "button" | typeof Link;
    href?: string;
    external?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    bgColor?: string;
    bgHover?: string;
} & ButtonSquareTypes & SpaceProps & ButtonProps;
export declare type ButtonSquareThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
};
export declare type ButtonSquareTheme = {
    [key in Variants]: ButtonSquareThemeVariant;
};
export {};
