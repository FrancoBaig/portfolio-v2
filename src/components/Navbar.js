import React from "react";

const sections = ["About", "Projects", "Skills", "Education", "Contact"];

const Section = ({ text }) => {
    return (
        <p className="text-grey font-bold px-1 border-b-4 border-grey-dark rounded hover:border-blue hover:text-white">
            {text}
        </p>
    );
};

function Navbar() {
    return (
        <div className="flex justify-end">
            <div className="flex gap-x-4">
                {sections.map((opt, index) => (
                    <Section key={index} text={opt} />
                ))}
            </div>
        </div>
    );
}

export default Navbar;
