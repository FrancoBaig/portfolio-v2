import React from "react";

// React player
import ReactPlayer from "react-player/lazy";

// Motion
import { motion, AnimatePresence } from "framer-motion";

// icons
import { XIcon } from "@heroicons/react/outline";

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

function Modal({ item, onClose }) {
    return (
        <AnimatePresence>
            {item !== null && (
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    onClick={() => onClose(null)}
                    className="fixed top-0 right-0 w-full h-full bg-backdrop z-20 flex items-center justify-center"
                >
                    <motion.div
                        layoutId={item.id}
                        className="h-fit bg-white py-2 rounded w-full relative md:w-fit"
                    >
                        <XIcon
                            className="text-black w-5 absolute top-2 right-3 z-40"
                            onClick={() => onClose(null)}
                        />

                        <div className="py-4 pl-2 ">
                            <h3 className="text-grey-dark text-xl font-bold self-center">
                                {item.title}
                            </h3>
                        </div>

                        <ReactPlayer
                            url={item.video}
                            controls
                            loop
                            playing={true}
                            width="100%"
                            height="100%"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
