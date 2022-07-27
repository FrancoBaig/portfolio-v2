import React from "react";

import linkedinIconBlue from "../assets/icons/linkedinIconBlue.svg";
import githubIcon from "../assets/icons/githubIcon.svg";
import { MailIcon } from "@heroicons/react/solid";

const HeroText = ({ user }) => {
    return (
        <div>
            <div className="h-2 bg-blue rounded-full w-1/3 mb-6"></div>
            <h2 className="text-white text-6xl font-bold mb-2">{user.name}</h2>
            <h3 className="text-grey text-4xl font-bold mb-6">{user.title}</h3>
            <p className="text-white text-base w-2/3">{user.description}</p>
            <div className="flex align-center absolute bottom-0 left-0">
                <a href={user.urls.linkedin}>
                    <img src={linkedinIconBlue} alt="linkedin" />
                </a>
                <a href={user.urls.github}>
                    <img src={githubIcon} className="w-12" alt="github" />
                </a>
                <a href={user.urls.email}>
                    <MailIcon
                        className="w-11 h-11 pt-1 text-blue"
                        alt="email"
                    />
                </a>
            </div>
        </div>
    );
};

function Hero({ data }) {
    return (
        <div className="grid gap-10 grid-cols-3 mt-8">
            <img
                src={data.img.normal}
                alt="profile"
                className="w-4/5 justify-self-end rounded "
            />
            <div className="col-span-2 relative">
                <HeroText user={data} />
            </div>
        </div>
    );
}

export default Hero;
