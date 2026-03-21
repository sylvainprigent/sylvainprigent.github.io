import { Link } from "react-router-dom"
import useLang from "../hooks/useLang"

export default function Hero() {

  const lang = useLang()

  return (

    <div className="hero-section container my-5">

      <div className="row align-items-center">

        {/* IMAGE */}

        <div className="col-lg-5 text-center mb-4 mb-lg-0">

          <img
            src="/profile.png"
            className="hero-avatar"
            alt="profile"
          />

        </div>

        {/* TEXT */}

        <div className="col-lg-7">

          <h1 className="hero-title display-5">

            AI & Data Systems Engineer

          </h1>

          <p className="lead mt-3">

            I build scalable AI systems, data platforms, and developer
            infrastructure. I focus on production-grade architecture,
            reliability, and real-world impact.

          </p>

          {/* TECH BADGES */}

          <div className="mt-3">

            <span className="tech-badge">Python</span>
            <span className="tech-badge">AI Systems</span>
            <span className="tech-badge">Distributed Systems</span>
            <span className="tech-badge">Kubernetes</span>
            <span className="tech-badge">Data Engineering</span>

          </div>

          {/* CTA BUTTONS */}

          <div className="hero-buttons mt-4 d-flex flex-wrap gap-3">

            <Link
              to={`/bio?lang=${lang}`}
              className="btn btn-primary"
            >
              Bio
            </Link>

            <a
              href={`/projects?lang=${lang}`}
              className="btn btn-outline-primary"
              target="_blank"
            >
              Projets
            </a>

            <a
              href="https://www.linkedin.com/in/sylvain-prigent"
              className="btn btn-dark"
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