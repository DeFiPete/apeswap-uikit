import React from "react";
import { Language } from "../LangSelector/types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
