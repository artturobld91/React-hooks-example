import "./App.css";
import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <UseStateAndUseRefExample />
      <FetchData />
    </div>
  );
}

function UseStateAndUseRefExample() {
  // UseRef: Maps the const property to the value in the form control. (property_name.current.value).
  const currentColor = useRef();

  // UseState: Gets the property initialization and has a function to set the property value.
  const [color, setColor] = useState("");

  // UseEffect: Track any changes done to a property, it can be one or many properties specified in the dependency array.
  useEffect(() => {
    console.log(`This is current color ${color}`);
  }, [color]);

  const submit = (event) => {
    event.preventDefault();
    const COLOR = currentColor.current.value;
    setColor(COLOR);
    console.log(`Current color ${COLOR}`);
  };

  return (
    <form onSubmit={submit}>
      <h1> useState and useRef Examples </h1>
      <h2>This is color {color}</h2>
      <input ref={currentColor} type="color"></input>
      <button>ADD</button>
    </form>
  );
}

function FetchData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {}, 30000);
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => setData(data)) // .then(setData)
      .then(() => setLoading(false))
      .catch((error) => setError(error)); // .catch(setError)
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre> {JSON.stringify(error)} </pre>;

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return <h1>Data</h1>;
}

export function Home() {
  return (
    <div>,
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <h1>My WebSite</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

// export default App;
