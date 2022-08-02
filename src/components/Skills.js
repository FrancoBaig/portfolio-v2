import React, { useEffect, useRef } from "react";

// Motion
import { useAnimation, motion, useInView } from "framer-motion";

// Parallax
import { Parallax } from "react-scroll-parallax";

const container = {
    hidden: {},
    show: {
        rotate: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
};

const Skill = ({ skill }) => {
    return (
        <Parallax speed={13}>
            <div>
                <motion.div
                    variants={item}
                    className="flex flex-col items-center mx-4"
                >
                    <p className="font-bold sm:text-lg">{skill.title}</p>
                    <img
                        src={skill.img}
                        className="w-20 sm:w-28"
                        alt={skill.title}
                    />
                </motion.div>
            </div>
        </Parallax>
    );
};

function Skills({ skills }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start("show");
        }
    }, [controls, isInView]);

    return (
        <div
            id="skills"
            className="h-screen md:h-screen bg-dark-grey text-white p-5 flex flex-col "
        >
            <h2 className="title self-center mb-28">Skills</h2>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={container}
                className="max-w-screen-md mx-auto grid gap-y-4 gap-x-20 grid-cols-2 sm:gap-y-12 sm:grid-cols-4"
            >
                {skills.map((skill) => (
                    <Skill skill={skill} key={skill.id} />
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;
