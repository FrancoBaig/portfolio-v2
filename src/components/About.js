import React, { useRef } from "react";

// Motion
import { motion } from "framer-motion";

// Parallax
import { Parallax } from "react-scroll-parallax";

// Helper
import { addPositionsToIcon } from "../helper/emojiPositions";

const Emojis = ({ emojis, dragConstraints }) => {
    const newEmojis = addPositionsToIcon(emojis);

    return (
        <>
            {newEmojis.map((icon, key) => (
                <motion.div
                    key={key}
                    className={`absolute text-3xl lg:text-4xl cursor-grab ${icon.props}`}
                    drag
                    dragConstraints={dragConstraints}
                    whileDrag={{
                        scale: 1.1,
                    }}
                >
                    <Parallax speed={icon.speed}>{icon.icon}</Parallax>
                </motion.div>
            ))}
        </>
    );
};

function About({ data }) {
    const constraintsRef = useRef(null);
    return (
        <motion.div
            ref={constraintsRef}
            id="about"
            className="h-screen bg-white pt-14 flex justify-center relative overflow-hidden py-8"
        >
            <Emojis emojis={data.emojis} dragConstraints={constraintsRef} />
            <div className="flex flex-col items-center max-w-xl">
                {data.about.map((text, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <h4 className="title">About me</h4>
                        <div className="my-8 px-4 sm:px-0">
                            <h2 className="text-grey font-bold text-lg sd:text-lg sm:text-2xl lg:text-4xl">
                                {text.title}
                            </h2>
                            <p className="mt-4 text-base md:w-10/12 lg:w-full lg:text-xl">
                                {text.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default About;
