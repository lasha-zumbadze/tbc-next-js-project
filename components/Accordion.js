"use client";

import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && <div className="px-4 py-2 bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;
