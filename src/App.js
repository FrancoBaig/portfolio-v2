import React from "react";
import "./App.css";

// Components
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";

// Data (remove)
import data from "./data.json";

function App() {
    return (
        <>
            <div className="bg-grey-dark">
                <div className="flex flex-col items-center">
                    <div className="max-w-7xl w-full pb-80 md:pb-0 md:h-screen p-5">
                        <Navbar sections={data.sections} />
                        <Hero data={data} />
                    </div>
                </div>
                <About data={data} />
                <Projects data={data} />
                <Skills skills={data.skills} />
            </div>
        </>
    );
}

export default App;
