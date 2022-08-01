import React from "react";
import "./App.css";

// Image
import bwprofile from "./assets/img/bwprofile.png";

// Components
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";

const data = {
    img: {
        normal: bwprofile,
    },
    name: "Franco Baigorria",
    title: "Full-Stack Developer",
    description: `Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic

                `,
    urls: {
        linkedin: "...",
        github: "...",
        email: "...",
    },
    sections: ["About", "Projects", "Skills", "Education", "Contact"],
};

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
            </div>
        </>
    );
}

export default App;
