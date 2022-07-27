import React from "react";

const HeroText = ({ user }) => {
    return (
        <div>
            <div className="h-2 bg-blue rounded-full w-1/3 mb-6"></div>
            <h2 className="text-white text-6xl font-bold mb-2">{user.name}</h2>
            <h3 className="text-grey text-4xl font-bold mb-6">{user.title}</h3>
            <p className="text-white text-base w-2/3">{user.description}</p>
        </div>
    );
};

function Hero({ data }) {
    return (
        <div className="grid gap-10 grid-cols-3 mt-8">
            <img
                src={data.img.normal}
                alt="profile"
                className="w-3/5 justify-self-end rounded "
            />
            <div className="col-span-2">
                <HeroText user={data} />
            </div>
        </div>
    );
}

export default Hero;
