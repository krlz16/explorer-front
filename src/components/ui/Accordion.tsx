'use client'

import { useState } from "react";

type props = {
    title: string
    children: React.ReactNode
}
const Accordion = ({ title, children }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={toggleAccordion}
        className="w-full text-left flex justify-between items-center bg-secondary transition p-4 rounded-xl outline-none"
      >
        <span className="font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="px-5">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
