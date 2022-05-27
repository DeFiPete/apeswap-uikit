import { ButtonProps as ThemeUIButtonProps, ThemeUICSSObject } from "theme-ui";
import { iconTypes } from "../Svg/types";
import { colorProps } from "../../theme/Apeswap/types";
export declare enum sizes {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
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
    SECONDARY = "secondary"
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
    csx?: ThemeUICSSObject;
    [key: string]: any;
}
export interface IconButtonProps extends Omit<ButtonProps, "variant"> {
    variant?: iconButtonVariantsProps;
    color?: colorProps;
    background?: colorProps;
    icon?: iconTypes;
}
