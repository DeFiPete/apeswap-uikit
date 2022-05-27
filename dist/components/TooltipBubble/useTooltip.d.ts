import { ReactNode } from "react";
declare const useTooltip: (content: ReactNode) => {
    showTooltip: () => void;
    hideTooltip: () => void;
    tooltip: ReactNode;
    show: boolean;
};
export default useTooltip;
