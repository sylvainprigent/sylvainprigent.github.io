import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useLang from "../hooks/useLang"
import Layout from "../components/Layout"
import useT from "../hooks/useT"
import LinkedinHero from "../components/LinkedinHero"
import WhatIBring from "../components/WhatIBring"
import ImpactHighlights from "../components/ImpactHighlights"

export default function Home(){

    const lang = useLang();
    const t = useT();

    const [projects, setProjects] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("/content/projects/index.json")
        .then(r => r.json())
        .then(data => setProjects(data.slice(0,3)))

        fetch("/content/blog/index.json")
        .then(r => r.json())
        .then(data => setPosts(data.slice(0,2)))

    }, [])

    return <Layout currentItemName="home">
    <div className="container">

      {/* HERO SECTION */}
      <LinkedinHero />

      {/* VALUE PROPOSITION */}
      <WhatIBring/>
      <ImpactHighlights />

      {/* FEATURED PROJECTS */}

      <div className="my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">{t("lasts_projects")}</h2>

          <Link
            to={`/projects?lang=${lang}`}
            className="btn btn-outline-secondary"
          >
            {t("view_all")}
          </Link>

        </div>

        <div className="row">

          {projects.map(p => (

            <div className="col-md-4 mb-4" key={p.slug}>

              <div className="card h-100 shadow-sm">

                <img
                  src={`/content/projects/${p.slug}/${p.image}`}
                  className="card-img-top project-image"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {lang === "fr" ? p.title_fr : p.title_en}
                  </h5>

                  <p className="card-text text-muted">

                    {lang === "fr"
                      ? p.impact_fr
                      : p.impact_en}

                  </p>

                </div>

                <div className="card-footer bg-white border-0">

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

      {/* ABOUT */}

      <div className="my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">{t("about")}</h2>
          <Link
            to={`/bio?lang=${lang}`}
            className="btn btn-outline-secondary"
          >
            {t("view_bio")}
          </Link>
          </div>  

          <div className="row">
          <p>
              {t("about_content").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </p>

          </div>  

        
      </div>

      <div className="my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">{t("Contact")}</h2>
                    <Link
            to={`https://www.linkedin.com/in/sylvain-prigent`}
            className="btn btn-outline-secondary"
          >
            {t("contact_me_on_linkedin")}
          </Link>
          </div>

          <p>
              {t("contact_content").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </p>        

      </div>


      {/* LATEST ARTICLES 
       {/*   
      <div className="my-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">{t("latest_articles")}</h2>

          <Link
            to={`/blog?lang=${lang}`}
            className="btn btn-outline-secondary"
          >
            {t("view_blog")}
          </Link>

        </div>

        {posts.map(post => (

          <div className="card mb-4 shadow-sm" key={post.slug}>

            <div className="card-body">

              <h4 className="card-title">

                {lang === "fr"
                  ? post.title_fr
                  : post.title_en}

              </h4>

              <p className="text-muted small">
                {post.date}
              </p>

              <Link
                to={`/blog/${post.slug}?lang=${lang}`}
                className="btn btn-primary btn-sm"
              >
                {t("read_article")}
              </Link>

            </div>

          </div>

        ))}

      </div>
      */}

    </div>
    </Layout>
};
