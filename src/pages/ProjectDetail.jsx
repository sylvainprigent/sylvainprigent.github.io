import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import useLang from "../hooks/useLang"
import useMarkdown from "../hooks/useMarkdown"


export default function ProjectDetails() {

  const { slug } = useParams()
  const lang = useLang()

  const { data, content } = useMarkdown(`/content/projects/${slug}/${lang}.md`)

  if (!data) return <div>Loading...</div>

  return <Layout currentItemName="projects">
    <div className="container my-5">
    <div className="project-head-image-wrapper text-center mb-4">
        <img
        src={`/content/projects/${slug}/${slug}.png`}
        alt={slug}
        className="project-head-image"
        />
    </div>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </Layout>

}