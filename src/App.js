import React from "react";

// Components
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";

// Spinner
import SyncLoader from "react-spinners/SyncLoader";

// Data
import useFetch from "./services/useFetch";

function App() {
    const { data, loading } = useFetch();
    return (
        <div className="bg-grey-dark">
            {!loading && data !== null ? (
                <>
                    <div className="flex flex-col items-center">
                        <div className="max-w-7xl w-full pb-80 md:pb-0 md:h-screen p-5">
                            <Navbar sections={data.sections} />
                            <Hero data={data} />
                        </div>
                    </div>
                    <About data={data} />
                    <Projects projects={data.projects} />
                    <Skills skills={data.skills} />
                </>
            ) : (
                <div className="w-full h-screen flex justify-center items-center">
                    <SyncLoader size="12px" color="#bababa" />
                </div>
            )}
        </div>
    );
}

export default App;
