import { ReactNode } from "react";
import { BoxProps } from "theme-ui";
export declare enum placements {
    TOPRIGHT = "topRight",
    TOPLEFT = "topLeft",
    BOTTOMRIGHT = "bottomRight",
    BOTTOMLEFT = "bottomLeft"
}
export declare type placementProps = `${placements}`;
export interface TooltipProps extends BoxProps {
    width?: string;
    placement?: placementProps;
    body: ReactNode;
}
