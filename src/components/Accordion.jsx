import { useState } from "react";

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    function handleClick(index) {
      //   expandedIndex === index ? setExpandedIndex() : setExpandedIndex(index);
      setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === index) {
          return -1;
        } else {
          return index;
        }
      });
    }
    return (
      <div className="border-3 m-10 text-black" key={item.id}>
        <div
          className="flex p-3 justify-between cursor-pointer bg-gray-200 border-b items-center"
          onClick={() => handleClick(index)}
        >
          <h1 className="mr-1 ">{item.label}</h1>
          <span className="text-3xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isExpanded && <h2 className="border-b p-5">{item.content}</h2>}
      </div>
    );
  });

  return (
    <>
      <div className="border-x  border-t rounded">{renderItems}</div>
    </>
  );
}

export default Accordion;
