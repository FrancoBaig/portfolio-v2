import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Section = ({ text }) => {
    return (
        <p className="text-grey font-bold px-1 rounded hover:text-white my-2 cursor-pointer">
            {text}
        </p>
    );
};

function Navbar({ sections }) {
    return (
        <Disclosure as="nav" className="sm:flex sm:items-center sm:justify-end">
            {({ open }) => (
                <>
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 mb-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
                        {open ? (
                            <XIcon className="w-8 h-8 text-white" />
                        ) : (
                            <MenuIcon className="w-8 h-8 text-white" />
                        )}
                    </Disclosure.Button>
                    <div className="hidden sm:flex gap-2">
                        {sections.map((opt, index) => (
                            <Section key={index} text={opt} />
                        ))}
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div>
                            {sections.map((opt, index) => (
                                <Section key={index} text={opt} />
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
