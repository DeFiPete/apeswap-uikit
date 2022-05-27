import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare const variants: {
    readonly PRIMARY: "primary";
    readonly SUCCESS: "success";
    readonly BINANCE: "binance";
    readonly ERROR: "error";
    readonly SECONDARY: "secondary";
    readonly TEXTDISABLED: "textDisabled";
    readonly TEXTSUBTLE: "textSubtle";
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface TagProps extends SpaceProps {
    variant?: Variants;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    outline?: boolean;
}
