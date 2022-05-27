import { ReactNode } from "react";
import { RenderResult } from "@testing-library/react";
export declare const renderWithTheme: (component: ReactNode, theme?: Omit<import("styled-components").DefaultTheme, "toggle">) => RenderResult;
