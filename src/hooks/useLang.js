import { useLocation } from "react-router-dom"

export default function useLang() {
  const location  = useLocation()

  const params = new URLSearchParams(location.search)

  const lang = params.get("lang")

  if (lang === "fr") return "fr"

  return "en"
}
