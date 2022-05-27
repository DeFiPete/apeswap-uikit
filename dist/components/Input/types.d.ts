import { InputProps as Props } from "theme-ui";
import { iconTypes } from "../Svg/types";
export declare enum sizes {
    SM = "sm",
    MD = "md",
    LG = "lg"
}
export declare const iconSizes: {
    sm: number;
    md: number;
    lg: number;
};
export declare type sizeProps = `${sizes}`;
export interface InputProps extends Omit<Props, "size"> {
    size?: sizeProps;
    icon?: iconTypes;
    width?: number | string;
}
