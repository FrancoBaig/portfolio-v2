import React, { useState } from "react";

// Motion
import { motion } from "framer-motion";

// Components
import Modal from "./Modal";

const containerHover = {
    rest: {},
    hover: { scale: 1.03 },
};

const itemHover = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
};

const ProjectIcons = ({ project, setItem }) => {
    return (
        <div className="flex gap-4 mt-4 w-full z-40">
            <a href={project.demo}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    whileHover={{ scale: 1.05 }}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </motion.svg>
            </a>
            <a href={project.code}>
                <motion.svg
                    class="w-8"
                    whileHover={{ scale: 1.05 }}
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                </motion.svg>
            </a>
            <motion.button
                className="flex gap-2 p-1 border border-2 border-white rounded"
                whileHover={{ scale: 1.05 }}
                onClick={() => setItem(project)}
            >
                <svg
                    variants={itemHover}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                    />
                </svg>
                <button className="text-sm">Play video</button>
            </motion.button>
        </div>
    );
};

const Project = ({ project, setItem }) => {
    return (
        <motion.div
            layoutId={project.id}
            className="relative h-fit max-w-xl p-4 rounded flex flex-col md:p-0"
        >
            <div className="absolute top-0 right-0 w-full h-full bg-blue/70 z-30 md:hidden"></div>
            <img
                className="rounded-md cursor-pointer absolute top-0 right-0 w-full h-full object-cover md:hidden"
                src={project.img}
                alt={project.title}
                onClick={() => setItem(project)}
            />
            <div className="z-40 md:absolute md:bg-blue/80 md:p-2 md:rounded md:max-w-sm md:-right-1/4 md:top-1/4 ">
                <h3 className="text-white text-xl font-bold py-2">
                    {project.title}
                </h3>

                <p className="text-white text-sm">{project.description}</p>

                <ProjectIcons project={project} setItem={setItem} />
            </div>

            <motion.div
                initial="rest"
                whileHover="hover"
                variants={containerHover}
                className="relative"
            >
                <img
                    className="hidden rounded-md cursor-pointer md:inline"
                    src={project.img}
                    alt={project.title}
                    onClick={() => setItem(project)}
                />
                <motion.svg
                    variants={itemHover}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-blue z-30 cursor-pointer absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => setItem(project)}
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                    />
                </motion.svg>
            </motion.div>
        </motion.div>
    );
};

function Projects({ projects }) {
    const [item, setItem] = useState(null);

    return (
        <div
            id="projects"
            className="h-screen md:h-screen text-white p-5 flex flex-col items-center"
        >
            <h2 className="title self-center">My favorites projects</h2>
            <div className="">
                {projects.map((proj) => (
                    <Project project={proj} key={proj.id} setItem={setItem} />
                ))}
            </div>
            <Modal item={item} onClose={setItem} />
        </div>
    );
}

export default Projects;
