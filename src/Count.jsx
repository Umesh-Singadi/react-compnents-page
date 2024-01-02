import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "setValueToAdd":
      return {
        ...state,
        valueToAdd: (state.valueToAdd = action.payload),
      };
    case "addValueToCount":
      return {
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};
function Count() {
  const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch({ type: "setValueToAdd", payload: value });
  };
  return (
    <>
      <h1>Count is {state.count}</h1>
      <button
        className="border"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="border"
        onClick={() => dispatch({ type: "increment" })}
      >
        Decrement
      </button>

      <div>
        <input
          className="border"
          type="number"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <button onClick={() => dispatch({ type: "addValueToCount" })}>
          Add it
        </button>
      </div>
    </>
  );
}

export default Count;
