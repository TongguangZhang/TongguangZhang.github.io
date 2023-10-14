import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Header from "./components/header/Header"
import "./styles/app.scss"
import Background from "./components/background/Background"

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Background />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Header />
        </BrowserRouter>
    )
}

export default App

