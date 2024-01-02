import Button from "../components/Button";
import {
  FaAdjust,
  FaApple,
  FaBell,
  FaEarlybirds,
  FaFeatherAlt,
} from "react-icons/fa";

function ButtonPage() {
  return (
    <>
      <div>
        <Button danger rounded onDoubleClick={() => console.log("primary")}>
          <FaAdjust />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseEnter={() => console.log("Secondary")}>
          <FaApple />
          Secondary
        </Button>
      </div>
      <div>
        <Button danger className="mb-80">
          <FaBell />
          Success
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <FaEarlybirds />
          Warning
        </Button>
      </div>
      <div>
        <Button success>
          <FaFeatherAlt />
          Danger
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
