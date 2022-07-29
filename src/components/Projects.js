import React, { useState } from "react";

// Motion
import { motion } from "framer-motion";

// Components
import Modal from "./Modal";

const Project = ({ project, setItem }) => {
    return (
        <motion.div layoutId={project.id} className="p-2 rounded flex flex-col">
            <h3 className="text-white text-xl font-bold pt-2 self-center">
                {project.title}
            </h3>
            <h4 className="text-grey text-lg front-bold py-2 self-center">
                {project.sub}
            </h4>
            <img
                className="rounded-md"
                src={project.img}
                alt={project.title}
                onClick={() => setItem(project)}
            />
            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                <a href={project.demo}>
                    <button className="btn w-full">Demo</button>
                </a>
                <a href={project.code}>
                    <button className="btn bg-grey w-full">Code</button>
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
        <div className="h-screen text-white p-5 flex flex-col">
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
