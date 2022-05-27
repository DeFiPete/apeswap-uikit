import { TextProps as ThemeUITextProps } from "theme-ui";
import { colorProps } from "../../theme/Apeswap/types";
export declare enum variants {
    SMALL = "sm",
    NORMAL = "md",
    LARGE = "lg"
}
export declare enum weights {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}
declare type variantProps = `${variants}`;
declare type weightProps = `${weights}` | number;
declare type sizeProps = string;
export interface TextProps extends ThemeUITextProps {
    variant?: variantProps;
    weight?: weightProps;
    color?: colorProps;
    size?: sizeProps;
    [key: string]: any;
}
export {};
