import React from "react";
import { Language } from "../../components/LangSelector/types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}
declare const SelectLanguageModal: React.FC<Props>;
export default SelectLanguageModal;
