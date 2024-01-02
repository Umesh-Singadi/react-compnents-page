import { useState } from "react";
import Model from "../components/Model";
import Button from "../components/Button";

function ModelPage() {
  const [showModel, setShowModel] = useState(false);

  const handleClick = () => {
    setShowModel(true);
  };

  const handleClose = () => {
    setShowModel(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const model = (
    <Model onClose={handleClose} actionBar={actionBar}>
      <p>Here is some important information that I'd like you to review</p>
    </Model>
  );

  return (
    <div>
      <Button onClick={handleClick} primary rounded>
        Open Model
      </Button>
      {showModel && model}
    </div>
  );
}

export default ModelPage;
