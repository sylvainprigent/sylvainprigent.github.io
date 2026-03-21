import useLang from "./useLang"
import { i18n } from "../i18n"

export default function useT() {

    const lang = useLang()
    console.log("lang:", lang)
    return (key) => i18n[lang][key] || key
}