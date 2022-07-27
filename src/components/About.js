import React from "react";

//Images
import profileremovebg from "../assets/img/profileremovebg.png";

function About({ data }) {
    return (
        <div className="w-full h-screen bg-white text-black pt-12 sm:grid sm:grid-cols-2 p-5 items-center">
            <div className="flex flex-col items-center">
                <h4 className="text-3xl font-bold">About</h4>
                <img
                    src={profileremovebg}
                    alt={data.name}
                    className="w-3/5 max-w-sm"
                />
            </div>
            <div>
                <div className="my-4">
                    <h2 className="text-grey font-bold text-sm sd:text-lg sm:text-2xl lg:text-4xl">
                        Full-Stack Developer Jr
                    </h2>
                    <p className="mt-4 text-base text-base sm:inline-block md:w-10/12 lg:w-3/4">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
