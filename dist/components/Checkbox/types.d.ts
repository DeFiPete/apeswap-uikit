import { InputHTMLAttributes } from "react";
import { ThemeUICSSObject } from "theme-ui";
export declare enum scales {
    SM = "sm",
    MD = "md"
}
export declare type scaleProps = `${scales}`;
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: scaleProps;
    display?: ThemeUICSSObject["display"];
}
