import { useEffect, useState } from "react"
import Layout from "../components/Layout"

import { Link } from "react-router-dom"
import useLang from "../hooks/useLang"
import useT from "../hooks/useT"

export default function Projects() {

  const [projects, setProjects] = useState([])
  const lang = useLang()
  const t = useT();

  useEffect(() => {
    fetch("/content/projects/index.json")
      .then(r => r.json())
      .then(setProjects)
  }, [])

  return (
    <Layout currentItemName="projects">
      <div className="container mt-5">

        <div className="row mb-4">
          <h1>{t("projects")}</h1>
        </div>

        <div className="row g-4">

          {projects.map(p => (
            <div
              key={p.slug}
              className="col-12 col-md-4 col-lg-4"
            >
              <div className="card h-100 shadow-sm">

                <img
                  src={`/content/projects/${p.slug}/${p.image}`}
                  className="card-img-top project-image"
                  alt={lang === "fr" ? p.title_fr : p.title_en}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {lang === "fr" ? p.title_fr : p.title_en}
                  </h5>

                  <p className="card-text text-muted">
                    {lang === "fr" ? p.impact_fr : p.impact_en}
                  </p>

                </div>

                <div className="card-footer bg-white border-0 text-center">

                  <Link
                    to={`/projects/${p.slug}?lang=${lang}`}
                    className="btn btn-sm btn-primary"
                  >
                    {t("view_project")}
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
  
}
