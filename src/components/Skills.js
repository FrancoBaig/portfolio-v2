import React from "react";

const Skill = ({ skill }) => {
    return (
        <div className="flex flex-col items-center mx-4">
            <p className="font-bold sm:text-lg">{skill.title}</p>
            <img src={skill.img} className="w-20 sm:w-28" alt={skill.title} />
        </div>
    );
};

function Skills({ skills }) {
    return (
        <div className="h-fit md:h-screen bg-white text-black p-5 flex flex-col ">
            <h2 className="title self-center">Skills</h2>
            <div className="max-w-screen-md mx-auto grid gap-y-8  gap-x-20 grid-cols-2 sm:gap-y-12 sm:grid-cols-4">
                {skills.map((skill) => (
                    <Skill skill={skill} key={skill.id} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
