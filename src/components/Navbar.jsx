import { Link, useLocation } from "react-router-dom"
import useLang from "../hooks/useLang"
import useT from "../hooks/useT"

export default function Navbar({ currentItem }) {

  const lang = useLang()
  const t = useT()
  const location = useLocation()

  const switchLang = lang === "en" ? "fr" : "en"

  console.log("lang value:", t("Home"));

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <div className="container">

        <Link className="navbar-brand fw-bold" to={`/?lang=${lang}`}>
          Sylvain Prigent
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className={`nav-link ${currentItem === "home" ? "active" : ""}`}
                to={`/?lang=${lang}`}
              >
                {t("home")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${currentItem === "bio" ? "active" : ""}`}
                to={`/bio?lang=${lang}`}
              >
                {t("bio")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${currentItem === "projects" ? "active" : ""}`}
                to={`/projects?lang=${lang}`}
              >
                {t("projects")}
              </Link>
            </li>
            {/*
            <li className="nav-item">
              <Link
                className={`nav-link ${currentItem === "blog" ? "active" : ""}`}
                to={`/blog?lang=${lang}`}
              >
                {t("blog")}
              </Link>
            </li>
            */}

            <li className="nav-item ms-2 mt-1">
              <a
                className="btn btn-outline-secondary btn-sm ms-2"
                href={`${location.pathname}?lang=${switchLang}`}
              >
                {switchLang.toUpperCase()}
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}