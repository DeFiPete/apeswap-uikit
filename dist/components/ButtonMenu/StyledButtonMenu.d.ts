import { DefaultTheme } from "styled-components";
import { variantProps } from "../Button/types";
declare type StyledButtonMenuProps = {
    variant: variantProps | string;
    theme: DefaultTheme;
};
declare const StyledButtonMenu: import("styled-components").StyledComponent<"div", DefaultTheme, StyledButtonMenuProps, never>;
export default StyledButtonMenu;
