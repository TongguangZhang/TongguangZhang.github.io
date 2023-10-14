import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={About} />
                <Route path="/projects" element={Skills} />
                <Route path="/skills" element={Projects} />
                <Route path="/contact" element={Contact} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

