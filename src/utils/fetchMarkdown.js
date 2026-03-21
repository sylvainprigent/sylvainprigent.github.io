import { marked } from "marked"

export async function fetchMarkdown(url) {
  const res = await fetch(url)
  const text = await res.text()

  // simple front-matter regex
  const match = text.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/)
  let frontMatter = {}
  let content = text

  if (match) {
    const yaml = match[1]
    content = match[2]
    yaml.split("\n").forEach(line => {
      const [key, ...rest] = line.split(":")
      frontMatter[key.trim()] = rest.join(":").trim()
    })
  }

  return {
    data: frontMatter,
    content: marked(content)
  }
}
