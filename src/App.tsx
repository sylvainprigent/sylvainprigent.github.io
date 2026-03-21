import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Bio from "./pages/Bio"
import BlogList from "./pages/BlogList"
import BlogPost from "./pages/BlogPost"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"

export default function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>

    </BrowserRouter>
  )
}
