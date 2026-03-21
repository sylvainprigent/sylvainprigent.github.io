import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useLang from "../hooks/useLang"
import Layout from "../components/Layout"
import useT from "../hooks/useT"


export default function BlogList() {
  const [articles, setArticles] = useState([]);
  const lang = useLang();
  const t = useT();

  useEffect(() => {
    fetch("/content/blog/index.json")
      .then((r) => r.json())
      .then(setArticles);
  }, []);

  return (
    <Layout currentItemName="blog">
      <div className="container my-5">
        <div className="row mb-4">
          <h1>{t("blog_title")}</h1>
        </div>

        <div className="row g-4 flex-column">
          {articles.map((a) => (
            <div key={a.slug} className="col-12">
              <Link
                to={`/blog/${a.slug}?lang=${lang}`}
                className="text-decoration-none text-dark"
              >
                <div className="card mb-3 blog-card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={`/content/blog/${a.slug}/${a.image}`}
                        className="img-fluid rounded-start blog-card-img"
                        alt={lang === "fr" ? a.title_fr : a.title_en}
                      />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                      <div className="card-body">
                        <h5 className="card-title">
                          {lang === "fr" ? a.title_fr : a.title_en}
                        </h5>
                        <p className="card-text text-muted">{a.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
