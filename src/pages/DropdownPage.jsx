import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option.value);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  return (
    <>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selection}
      ></Dropdown>
    </>
  );
}

export default DropdownPage;
