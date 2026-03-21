import { useParams } from "react-router-dom"
import useLang from "../hooks/useLang"
import useMarkdown from "../hooks/useMarkdown"

export default function BlogPost() {

  const { slug } = useParams()
  const lang = useLang()

  const { data, content } = useMarkdown(`/content/blog/${slug}/${lang}.md`)

  if (!data) return <div>Loading...</div>

  return <Layout currentItemName="blog">
    <div className="container my-5">
    <div className="project-image-wrapper text-center mb-4">
        <img
        src={`/content/projects/${slug}/${slug}.png`}
        alt={slug}
        className="project-image"
        />
    </div>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </Layout>

}
