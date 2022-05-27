export declare enum variants {
    ERROR = "error",
    DANGER = "danger",
    SUCCESS = "success",
    INFO = "info"
}
export declare enum sizes {
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare const alertFontSizes: {
    sm: number;
    md: number;
    lg: number;
};
export declare type sizeProps = `${sizes}`;
export declare type variantProps = `${variants}`;
export interface AlertProps {
    variant?: variantProps;
    text?: string;
    linkText?: string;
    url?: string;
    size?: sizeProps;
    onClose?: () => void;
}
