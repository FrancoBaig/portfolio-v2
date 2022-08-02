import React, { useEffect, useRef } from "react";

// Motion
import { motion, useAnimation, useInView } from "framer-motion";

// Parallax
import { Parallax } from "react-scroll-parallax";

function About({ data }) {
    const constraintsRef = useRef(null);
    console.log(data);

    return (
        <motion.div
            ref={constraintsRef}
            id="about"
            className="relative w-full h-screen bg-white pt-14 flex justify-center  overflow-hidden py-8"
        >
            {data.emojis.map((icon, index) => (
                <motion.div
                    key={index}
                    className={`absolute text-3xl cursor-grab ${icon.props}`}
                    drag
                    dragConstraints={constraintsRef}
                    whileDrag={{
                        scale: 1.1,
                    }}
                >
                    <Parallax speed={icon.speed}>{icon.icon}</Parallax>
                </motion.div>
            ))}
            {/* <div className="flex flex-col items-center max-w-xl">
                {data.about.map((text, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <h4 className="title">About</h4>
                        <div className="my-8 px-4 sm:px-0">
                            <h2 className="text-grey font-bold text-sm sd:text-lg sm:text-2xl lg:text-4xl">
                                {text.title}
                            </h2>
                            <p className="mt-4 text-base text-base md:w-10/12 lg:w-full">
                                {text.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
        </motion.div>
    );
}

export default About;
