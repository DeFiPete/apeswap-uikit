import { MediaQueries, Breakpoints, Spacing, FontFamily } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    yellow: string;
    inset: string;
};
export declare const radii: {
    card: string;
    circle: string;
    default: string;
    normal: string;
    small: string;
};
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    fontFamily: FontFamily;
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        yellow: string;
        inset: string;
    };
    radii: {
        card: string;
        circle: string;
        default: string;
        normal: string;
        small: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
export default _default;
