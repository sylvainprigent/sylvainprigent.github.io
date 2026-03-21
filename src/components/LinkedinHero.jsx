import { Link } from "react-router-dom"
import useLang from "../hooks/useLang"
import useT from "../hooks/useT"

export default function Hero() {

  const lang = useLang()
  const t = useT()

  return (

    <div className="container my-5">

      {/* BANNER */}

      <div className="banner-container">

        <img
          src="/banner.png"
          className="hero-banner"
          alt="banner"
        />

        {/* PROFILE IMAGE */}

        <img
          src="/profile.png"
          className="hero-avatar"
          alt="profile"
        />

      </div>

      {/* CONTENT */}

      <div className="hero-content row">

        <div className="col-lg-3"></div>

        <div className="col-lg-9">

        {/* 
          <h1 className="hero-name display-5">
            Sylvain Prigent
          </h1>
        */}

          <p className="lead">
            {t("hero_title")}
          </p>

          <p>
              {t("hero_description").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </p>

          {/* KEYWORDS */}

          <div className="mt-3">
            {t("hero_keywords").map((kw) => (

                <span key={kw} className="tech-badge">
                {kw}
                </span>

            ))}
          </div>

          {/* BUTTONS */}

          <div className="hero-buttons mt-4 d-flex flex-wrap gap-3">

            <Link
              to={`/bio?lang=${lang}`}
              className="btn btn-primary"
            >
              Bio
            </Link>

            <a
              href={`/projects?lang=${lang}`}
              className="btn btn-primary"
              target="_blank"
            >
              Projets
            </a>

            <a
              href="https://www.linkedin.com/in/sylvain-prigent"
              className="btn btn-primary"
              target="_blank"
            >
              Linkedin
            </a>

          </div>

        </div>

      </div>

    </div>

  )
}