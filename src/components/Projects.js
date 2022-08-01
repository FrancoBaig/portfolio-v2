import React, { useState } from "react";

// Motion
import { motion } from "framer-motion";

// Components
import Modal from "./Modal";

const containerHover = {
    rest: {},
    hover: { scale: 1.05 },
};

const itemHover = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
};

const Project = ({ project, setItem }) => {
    return (
        <motion.div layoutId={project.id} className="p-2 rounded flex flex-col">
            <h3 className="text-white text-xl font-bold pt-2 self-center">
                {project.title}
            </h3>
            <h4 className="text-grey text-lg front-bold py-2 self-center">
                {project.sub}
            </h4>
            <motion.div
                initial="rest"
                whileHover="hover"
                variants={containerHover}
                className="relative"
            >
                <img
                    className="rounded-md cursor-pointer"
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
                        clip-rule="evenodd"
                    />
                </motion.svg>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                <a href={project.demo}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="btn w-full"
                    >
                        Demo
                    </motion.button>
                </a>
                <a href={project.code}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="btn bg-grey hover:bg-gray-600 focus:bg-gray-600 w-full"
                    >
                        Code
                    </motion.button>
                </a>
            </div>
        </motion.div>
    );
};

const projects = [
    {
        id: 1,
        title: "Thullo",
        sub: "Trello Clone",
        img: "https://i.imgur.com/qCvAItV.png",
        code: "",
        demo: "",
        video: "https://res.cloudinary.com/francobaigorria/video/upload/c_crop,co_rgb:000000,h_452,w_1024/v1659118989/portfolio/2022-07-29_15-20-46_xmuty8.mp4",
    },
    {
        id: 2,
        title: "Proyect 2",
        sub: "Trello 2",
        img: "https://i.imgur.com/qCvAItV.png",
        code: "",
        demo: "",
        video: "https://res.cloudinary.com/francobaigorria/video/upload/c_crop,co_rgb:000000,h_452,w_1024/v1659118989/portfolio/2022-07-29_15-20-46_xmuty8.mp4",
    },
    {
        id: 3,
        title: "Proyect 3",
        sub: "Trello 3",
        img: "https://i.imgur.com/qCvAItV.png",
        code: "",
        demo: "",
        video: "https://res.cloudinary.com/francobaigorria/video/upload/c_crop,co_rgb:000000,h_452,w_1024/v1659118989/portfolio/2022-07-29_15-20-46_xmuty8.mp4",
    },
];

function Projects() {
    const [item, setItem] = useState(null);

    return (
        <div className="h-fir md:h-screen text-white p-5 flex flex-col">
            <h2 className="title self-center">My favorites projects</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((proj) => (
                    <Project project={proj} key={proj.id} setItem={setItem} />
                ))}
            </div>
            <Modal item={item} onClose={setItem} />
            <p className="mt-4 self-center">👆 Tap to open a video</p>
        </div>
    );
}

export default Projects;
