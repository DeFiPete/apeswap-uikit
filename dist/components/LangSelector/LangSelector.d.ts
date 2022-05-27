import React from "react";
import { LangType } from "../../widgets/Navbar";
import { Colors } from "../../theme/types";
import { Sizes } from "../Button/types";
import { Position } from "../Dropdown/types";
interface Props {
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
    color: keyof Colors;
    dropdownPosition?: Position;
    buttonScale?: Sizes;
    hideLanguage?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
