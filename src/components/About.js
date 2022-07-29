import React from "react";

// Parallax
import { Parallax } from "react-scroll-parallax";

const icons = [
    {
        icon: "🐕‍🦺",
        props: "top-1/3 right-1/3 -translate-y-32",
        speed: -10,
    },
    { icon: "🐈", props: "top-1/3 right-1/3 translate-x-36", speed: 10 },
    {
        icon: "💻",
        props: "top-2/3 right-2/3 -translate-x-20 -translate-y-38",
        speed: -10,
    },
    {
        icon: "🏋️‍♀️",
        props: "top-3/4 right-1/3 -translate-x-16 -translate-y-40",
        speed: 10,
    },
    {
        icon: "📕",
        props: "top-1/2 right-3/4 -translate-x-20 -translate-y-60",
        speed: -10,
    },
    {
        icon: "🦔",
        props: "top-1/2 right-2/3 -translate-x-64",
        speed: 10,
    },
    { icon: "⚡", props: "top-1/2 right-1/3 translate-x-40", speed: -10 },
];

function About({ data }) {
    return (
        <div className="h-screen bg-white pt-14 flex justify-center relative">
            {icons.map((icon) => (
                <span
                    key={icon.icon}
                    className={`absolute text-3xl ${icon.props}`}
                >
                    <Parallax speed={icon.speed}>{icon.icon}</Parallax>
                </span>
            ))}
            <div className="flex flex-col items-center max-w-xl">
                <h4 className="text-3xl font-bold pt-16 mb-12">About</h4>
                <div className="my-8 px-4 sm:px-0">
                    <h2 className="text-grey font-bold text-sm sd:text-lg sm:text-2xl lg:text-4xl">
                        Full-Stack Developer Jr
                    </h2>
                    <p className="mt-4 text-base text-base md:w-10/12 lg:w-full">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic
                    </p>
                </div>
                <div className="my-8 px-4 sm:px-0">
                    <h2 className="text-grey font-bold text-sm sd:text-lg sm:text-2xl lg:text-4xl">
                        Full-Stack Developer Jr
                    </h2>
                    <p className="mt-4 text-base text-base md:w-10/12 lg:w-full">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
