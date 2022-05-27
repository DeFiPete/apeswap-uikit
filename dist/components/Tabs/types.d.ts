export declare enum sizes {
    EXTRA_SMALL = "xsm",
    SMALL = "sm",
    MEDIUM = "md",
    LARGE = "lg"
}
export declare const tabPadding: {
    xsm: {
        x: number;
        y: number;
    };
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
export declare const fontSizes: {
    xsm: number;
    sm: number;
    md: number;
    lg: number;
};
export declare enum variants {
    CENTERED = "centered",
    FULLWIDTH = "fullWidth"
}
export declare type variantProps = `${variants}`;
export declare type sizeProps = `${sizes}`;
export interface TabProps {
    index: number;
    activeTab?: number;
    label: string;
    onClick: (activeTab: number) => void;
    size: sizeProps;
    variant: variantProps;
}
export interface TabsProps {
    activeTab: number;
    variant?: variantProps;
    size?: sizeProps;
}
export interface TabPanelProps {
    index: number;
    activeTab: number;
}
