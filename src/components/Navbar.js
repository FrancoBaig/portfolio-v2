import React, { useState, useRef } from "react";

// icons
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// helper
import { useDimensions } from "../helper/use-dimensios";

// motion
import { motion } from "framer-motion";

const Section = ({ text }) => {
    return (
        <p className="text-grey font-bold text-xl px-1 rounded hover:text-white cursor-pointer">
            {text}
        </p>
    );
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const sections = ["About", "Projects", "Skills", "Education", "Contact"];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            className="sm:flex sm:items-center sm:justify-end"
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div
                variants={sidebar}
                className={
                    "absolute top-1 left-1 bottom-0 bg-black w-full z-20 sm:hidden"
                }
            />
            <div
                className="inline-flex items-center justify-center p-2 mb-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <XIcon className="w-8 h-8 text-white z-30" />
                ) : (
                    <MenuIcon className="w-8 h-8 text-white z-30" />
                )}
            </div>

            {isOpen ? (
                <div className="relative z-30 sm:hidden">
                    <div className="flex flex-col gap-3 ">
                        {sections.map((opt, index) => (
                            <Section key={index} text={opt} />
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className="hidden sm:flex gap-2">
                {sections.map((opt, index) => (
                    <Section key={index} text={opt} />
                ))}
            </div>
        </motion.nav>
    );
}

export default Navbar;
