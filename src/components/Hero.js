import React from "react";

// Icons
import linkedinIconBlue from "../assets/icons/linkedinIconBlue.svg";
import githubIcon from "../assets/icons/githubIcon.svg";
import { MailIcon } from "@heroicons/react/solid";

// Parallax
import { useParallax } from "react-scroll-parallax";

function Hero({ data }) {
    const { ref } = useParallax({
        speed: -18,
    });

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
                <div className="flex align-center absolute bottom-0 left-0">
                    <a href={data.urls.linkedin}>
                        <img src={linkedinIconBlue} alt="linkedin" />
                    </a>
                    <a href={data.urls.github}>
                        <img src={githubIcon} className="w-12" alt="github" />
                    </a>
                    <a href={data.urls.email}>
                        <MailIcon className="w-11 h-11 pt-1 text-blue" />
                    </a>
                </div>
            </div>
            <p className="text-white text-base col-span-2 text-sm text-center sm:hidden">
                {data.description}
            </p>
        </div>
    );
}

export default Hero;
