import { MediaQueries } from "../types";
export declare const breakpointMap: {
    [key: string]: number;
};
declare const baseTheme: {
    initialColorModeName: string;
    breakpoints: string[];
    space: number[];
    fontSizes: number[];
    borderWidths: number[];
    mediaQueries: MediaQueries;
    fontWeights: {
        light: number;
        normal: number;
        bold: number;
    };
    fonts: {
        titan: string;
        poppins: string;
    };
    radii: {
        small: string;
        default: string;
        normal: string;
        card: string;
        circle: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
    };
};
export default baseTheme;
