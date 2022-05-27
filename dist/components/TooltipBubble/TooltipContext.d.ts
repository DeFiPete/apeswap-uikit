import React, { ReactNode } from "react";
interface TooltipContext {
    show: boolean;
    tooltip: ReactNode;
    setShow: (value: boolean) => void;
    setTooltip: (value: ReactNode) => void;
    handleShow: (value: ReactNode) => void;
    handleHide: (value: ReactNode) => void;
}
export declare const Context: React.Context<TooltipContext>;
declare const TooltipProvider: React.FC;
export default TooltipProvider;
