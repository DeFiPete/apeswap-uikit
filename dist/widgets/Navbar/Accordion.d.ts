import React from "react";
import { PushedProps, LiveResultProps } from "./types";
interface Props extends PushedProps {
    label: string;
    icon?: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    found?: LiveResultProps["apiResult"][0];
}
declare const Accordion: React.FC<Props>;
export default Accordion;
