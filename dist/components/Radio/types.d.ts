import { ThemeUICSSObject } from "theme-ui";
import { InputHTMLAttributes } from "react";
export declare enum scales {
    SM = "sm",
    MD = "md"
}
export declare type scaleProps = typeof scales[keyof typeof scales];
export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    scale?: scaleProps;
    display?: ThemeUICSSObject["display"];
}
