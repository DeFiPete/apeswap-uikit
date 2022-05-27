import { Language } from "../../components/LangSelector/types";
interface ReturnType {
    onPresentLanguageModal: () => void;
}
declare const useLanguageModal: (currentLang: string, langs: Language[], setLang: (lang: Language) => void, t: (key: string) => string) => ReturnType;
export default useLanguageModal;
