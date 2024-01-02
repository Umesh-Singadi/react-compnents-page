import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handle = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handle, true);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);
  const handleClick = () => {
    setIsOpen((pre) => !pre);
  };
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {value ? value : "Select..."}
        <div className="text-xl">
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </Panel>
      {isOpen && <Panel className="absolute t-full  ">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
