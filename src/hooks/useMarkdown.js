import { useState, useEffect } from "react"
import { fetchMarkdown } from "../utils/fetchMarkdown"

export default function useMarkdown(url) {
  const [data, setData] = useState({})
  const [content, setContent] = useState("")

  useEffect(() => {
    fetchMarkdown(url).then(md => {
      setData(md.data)
      setContent(md.content)
    })
  }, [url])

  return { data, content }
}