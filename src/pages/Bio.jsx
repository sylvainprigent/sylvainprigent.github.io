import useLang from "../hooks/useLang"
import useMarkdown from "../hooks/useMarkdown"
import Layout from "../components/Layout"

export default function Bio() {

  const lang = useLang()

  const { data, content } = useMarkdown(`/content/bio/${lang}.md`)

  if (!data) return <div>Loading...</div>

  return <Layout currentItemName="bio">
    <div className="container my-5">
      <div className="bio-markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </Layout>
}
