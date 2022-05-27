import { ReactNode } from "react";
import { ButtonProps as ThemeUIButtonProps } from "theme-ui";
import { iconTypes } from "../Svg/types";
import { colorProps } from "../../theme/Apeswap/types";
export declare enum sizes {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare type Sizes = typeof sizes[keyof typeof sizes];
export declare const buttonFontSizes: {
    sm: number;
    md: number;
    lg: number;
};
export declare const buttonPadding: {
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
export declare enum variants {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    TEXT = "text",
    SUCCESS = "success",
    DANGER = "danger"
}
export declare enum iconButtonVariants {
    PRIMARY = "primary",
    TRANSPARENT = "transparent",
    CIRCULAR = "circular"
}
export declare type sizeProps = `${sizes}`;
export declare type variantProps = `${variants}`;
export declare type iconButtonVariantsProps = `${iconButtonVariants}`;
export interface ButtonProps extends ThemeUIButtonProps {
    variant?: variantProps;
    size?: sizeProps;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    load?: boolean;
    [key: string]: any;
}
export interface IconButtonProps extends Omit<ButtonProps, "variant"> {
    variant?: iconButtonVariantsProps;
    color?: colorProps;
    background?: colorProps;
    icon?: iconTypes;
}
export declare type ButtonThemeVariant = {
    background: string;
    backgroundActive: string;
    backgroundHover: string;
    border: string | number;
    borderColorHover: string;
    boxShadow: string;
    boxShadowActive: string;
    color: string;
};
export declare type ButtonTheme = {
    [key in variants]: ButtonThemeVariant;
};
