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
        <Parallax speed={5}>
            <div>
                <motion.div
                    variants={item}
                    className="flex flex-col gap-4 items-center"
                >
                    <p className="font-bold sm:text-lg">{skill.title}</p>
                    <img
                        src={skill.img}
                        className="w-20 sm:w-22"
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
    const highlighted = skills.filter((el) => el.isHighlighted);
    const others = skills.filter((el) => !el.isHighlighted);

    useEffect(() => {
        if (isInView) {
            controls.start("show");
        }
    }, [controls, isInView]);

    return (
        <div
            id="skills"
            className="h-fit bg-dark-grey text-white p-5 flex flex-col py-20"
        >
            <h2 className="title self-center my-8 mb-12">Skills</h2>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={container}
                className="max-w-screen-md mx-auto grid gap-y-4 gap-x-20 grid-cols-2 sm:gap-y-12 sm:grid-cols-5"
            >
                {highlighted.map((skill) => (
                    <Skill skill={skill} key={skill.id} />
                ))}
            </motion.div>
            <h3 className="title text-grey self-center text-2xl mb-10">
                Others
            </h3>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={container}
                className="max-w-screen-sm mx-auto grid gap-y-4 gap-x-20 grid-cols-2 sm:gap-y-12 sm:grid-cols-4"
            >
                {others.map((skill) => (
                    <Skill skill={skill} key={skill.id} />
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;
