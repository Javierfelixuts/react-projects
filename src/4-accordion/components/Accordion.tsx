import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type AccordionProps = {
  question: string;
  info: string;
  isOpen: boolean;
  id: number;
};

const Accordion = ({ question, info }: AccordionProps) => {
  const [isOpen, setIsOpen ] = useState(false);

  const handleAccordion = () => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <div className="accordion border border-slate-300 shadow rounded p-4 my-3 block w-full">
      <div className="w-full flex justify-between items-start">
        <h3 className="text-left text-lg font-bold inline">{question}</h3>
        <button
          className="m-2 p-2 -mt-1.5 text-red-400 rounded-full font-bold bg-gray-200 relative content-end"
          onClick={handleAccordion}
        >
          {isOpen ? <FaMinus /> : < FaPlus />}
        </button>
      </div>
      <p
        className={` info font-semibold overflow-hidden transition ease-linear ${isOpen ? "max-h-40" : "max-h-0"}  `}
      >
        {info}
      </p>
    </div>
  );
};

export default Accordion;
