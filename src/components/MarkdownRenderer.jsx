import ReactMarkdown from "react-markdown"

export default function MarkdownRenderer({ content }) {

  return (
    <div className="prose lg:prose-lg">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}
