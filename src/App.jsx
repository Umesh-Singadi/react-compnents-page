import "./App.css";
import Sidebar from "./components/Sidebar";
import Rout from "./components/Rout";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import ModelPage from "./pages/ModelPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(100);

  return (
    <>
      <h1>Count is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 ml-6">
        <Sidebar></Sidebar>
        <div className="col-span-5">
          <Rout path="/accordion">
            <AccordionPage />
          </Rout>
          <Rout path="/">
            <DropdownPage />
          </Rout>
          <Rout path="/buttons">
            <ButtonPage />
          </Rout>
          <Rout path="/model">
            <ModelPage />
          </Rout>
          <Rout path="/table">
            <TablePage />
          </Rout>
          <Rout path="/count">
            <CounterPage initialState={10} />
          </Rout>
        </div>
      </div>
    </>
  );
}

export default App;
