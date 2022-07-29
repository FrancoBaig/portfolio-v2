import React from "react";

// Motion
import { motion } from "framer-motion";

// Icons
import linkedinIconBlue from "../assets/icons/linkedinIconBlue.svg";
import githubIconBlue from "../assets/icons/githubIconBlue.svg";
import mailIconBlue from "../assets/icons/mailIconBlue.png";

// Parallax
import { useParallax } from "react-scroll-parallax";

const Icon = ({ url, delay = 0, children }) => {
    const itemAnimation = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.a href={url} variants={itemAnimation}>
            {children}
        </motion.a>
    );
};

function Hero({ data }) {
    const { ref } = useParallax({
        speed: -18,
    });

    const containerAnimation = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div
            ref={ref}
            className="grid grid-cols-2 gap-4 translate-y-20 md:translate-y-0 md:gap-6 lg:grid-cols-3 lg:gap-8"
        >
            <img
                src={data.img.normal}
                alt="profile"
                className="rounded justify-self-end sm:w-72"
            />
            <div className="relative lg:col-span-2">
                <div className="h-2 bg-blue rounded-full mb-2 md:w-3/6 "></div>
                <h2 className="text-white font-bold text-lg sd:text-2xl sm:text-4xl lg:text-6xl">
                    {data.name}
                </h2>
                <h3 className="text-grey font-bold text-sm sd:text-lg sm:text-2xl lg:text-4xl">
                    {data.title}
                </h3>
                <p className="hidden mt-4 text-white text-base text-base sm:inline-block md:w-3/4 lg:w-3/6">
                    {data.description}
                </p>
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    animate="visible"
                    className="flex align-center absolute bottom-0 left-0 gap-3"
                >
                    <Icon url={data.urls.linkedin} delay={0}>
                        <img
                            src={linkedinIconBlue}
                            className="w-12"
                            alt="linkedin"
                        />
                    </Icon>
                    <Icon url={data.urls.github} delay={0.3}>
                        <img
                            src={githubIconBlue}
                            className="w-12"
                            alt="github"
                        />
                    </Icon>
                    <Icon url={data.urls.github} delay={0.3}>
                        <img
                            src={mailIconBlue}
                            className="w-12 rounded-3xl "
                            alt="mail"
                        />
                    </Icon>
                </motion.div>
            </div>
            <p className="text-white text-base col-span-2 text-sm text-center sm:hidden">
                {data.description}
            </p>
        </div>
    );
}

export default Hero;
