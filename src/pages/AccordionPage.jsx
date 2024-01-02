import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.",
    },
    {
      id: 2,
      label: "What are the key features of React?",
      content:
        "Key features of React include virtual DOM for efficient rendering, JSX syntax for defining components, one-way data binding, and the ability to create reusable components.",
    },
    {
      id: 3,
      label: "Explain the concept of JSX.",
      content:
        "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML in your JavaScript code.",
    },
    {
      id: 4,
      label: "What is the virtual DOM in React?",
      content:
        "The virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to improve performance by minimizing direct manipulation of the actual DOM. It compares the virtual DOM with the real DOM and only updates the parts that have changed.",
    },
    {
      id: 5,
      label: "What is the significance of state in React?",
      content:
        "State in React is a JavaScript object that represents the internal state of a component. It determines how a component renders and behaves. When the state of a component changes, React re-renders the component to reflect the updated state.",
    },
    {
      id: 6,
      label: "Explain the difference between props and state.",
      content:
        "Props (short for properties) are inputs to a React component that are passed in from its parent. They are immutable. State, on the other hand, is managed within the component and can be changed over time. State changes trigger re-rendering of the component.",
    },
    {
      id: 7,
      label: "What is React Router?",
      content:
        "React Router is a standard library for routing in React applications. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.",
    },
    {
      id: 8,
      label: "What are higher-order components (HOCs) in React?",
      content:
        "Higher-order components are a pattern in React where a function takes a component and returns a new component with additional props or behavior. HOCs are used for code reuse, logic abstraction, and to modify component behavior.",
    },
    {
      id: 9,
      label: "What is the purpose of the useEffect hook in React?",
      content:
        "The useEffect hook in React is used for side effects in functional components. It allows you to perform actions in your component such as data fetching, subscriptions, or manually changing the DOM after the component has rendered.",
    },
    {
      id: 10,
      label: "Explain the concept of controlled and uncontrolled components.",
      content:
        "Controlled components are those whose form elements (like inputs or selects) are controlled by React state. Uncontrolled components, on the other hand, store their own state internally, typically through the DOM, and are not directly controlled by React.",
    },
    {
      id: 11,
      label: "What are hooks in React?",
      content:
        "Hooks are functions that enable functional components to use state and lifecycle features that were previously only available in class components. The most commonly used hooks are useState, useEffect, useContext, and useReducer.",
    },
    {
      id: 12,
      label: "Explain the useContext hook in React.",
      content:
        "The useContext hook in React allows functional components to subscribe to a context without introducing nesting. It simplifies the process of consuming values from the context API and makes it more readable and concise.",
    },
    {
      id: 13,
      label: "What is Redux, and why might you use it in a React application?",
      content:
        "Redux is a state management library for JavaScript applications. It helps manage the global state of an application in a predictable way, making it easier to debug and understand complex state changes. Redux is often used in larger applications or those with complex state logic.",
    },
    {
      id: 14,
      label: "Explain the concept of React PureComponent.",
      content:
        "React PureComponent is a base class similar to React.Component, but it implements shouldComponentUpdate with a shallow prop and state comparison. This can help optimize performance in scenarios where unnecessary renders need to be avoided.",
    },
    {
      id: 15,
      label: "What is the significance of keys in React lists?",
      content:
        "Keys are used in React lists to give elements a stable identity across renders. They help React identify which items have changed, been added, or been removed. Keys should be unique among siblings, but they don't need to be globally unique.",
    },
    {
      id: 16,
      label: "What is the purpose of the useCallback hook?",
      content:
        "The useCallback hook is used to memoize functions so that they are not recreated on every render. This can improve performance by ensuring that the same function reference is used across renders, especially when passing functions as props to child components.",
    },
    {
      id: 17,
      label: "Explain the concept of code splitting in React.",
      content:
        "Code splitting is a technique used to split your JavaScript code into smaller chunks that can be loaded on demand. This helps reduce the initial load time of your application by only loading the code that is necessary for the current view or feature.",
    },
    {
      id: 18,
      label: "What is the purpose of the forwardRef function in React?",
      content:
        "The forwardRef function allows a component to pass its ref down to a child component. This is useful in cases where the parent component needs to interact with a specific DOM element or React component in the child, such as focusing an input field.",
    },
    {
      id: 19,
      label: "Explain the concept of lazy loading in React.",
      content:
        "Lazy loading is a technique where you delay the loading of certain parts of your application until they are actually needed. React provides a lazy function and Suspense component to enable lazy loading of components, making your application more efficient.",
    },
    {
      id: 20,
      label: "What is the purpose of the useMemo hook?",
      content:
        "The useMemo hook is used to memoize the result of a computation so that it is not recomputed on every render. This can be helpful for optimizing performance in scenarios where a computation is expensive and doesn't need to be recalculated frequently.",
    },
    {
      id: 21,
      label: "Create a Simple React Component",
      content:
        "Write a simple React component called 'MyComponent' that renders a div with the text 'Hello, React!' inside it.",
    },
    {
      id: 22,
      label: "Conditional Rendering in React",
      content:
        "Create a React component that renders 'Logged In' if a prop 'isLoggedIn' is true, and 'Logged Out' if it's false.",
    },
    {
      id: 23,
      label: "Handling Events in React",
      content:
        "Write a React component with a button. When the button is clicked, update the component's state to increment a counter, and display the counter value on the page.",
    },
    {
      id: 24,
      label: "Fetching Data in React",
      content:
        "Create a React component that fetches data from an API (e.g., JSONPlaceholder) and displays it on the page. You can use the 'fetch' function or a library like Axios.",
    },
    {
      id: 25,
      label: "Form Handling in React",
      content:
        "Build a React form component with input fields for 'username' and 'password'. When the form is submitted, log the values to the console.",
    },
    {
      id: 26,
      label: "React Router Navigation",
      content:
        "Set up a simple React application with React Router. Create two pages (components) - 'Home' and 'About'. Add navigation links to switch between the pages.",
    },
    {
      id: 27,
      label: "State Management with Context",
      content:
        "Implement a simple counter application using React context for state management. Create a context provider with a state for the counter value and allow multiple components to access and update it.",
    },
    {
      id: 28,
      label: "Redux State Management",
      content:
        "Set up a React application with Redux. Create actions, reducers, and a store to manage a simple counter state. Connect your components to Redux to read and update the counter state.",
    },
    {
      id: 29,
      label: "Code Splitting with React.lazy",
      content:
        "Use React.lazy and Suspense to implement code splitting in your React application. Split a component into a separate file and load it lazily when needed.",
    },
    {
      id: 30,
      label: "React Hooks - Custom Hook",
      content:
        "Create a custom React hook called 'useLocalStorage' that enables components to read and write to localStorage. Use this hook in a component to persist a counter value between page reloads.",
    },
  ];
  return (
    <>
      <Accordion items={items}></Accordion>
    </>
  );
}

export default AccordionPage;
