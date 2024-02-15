import "./App.css";
import Title from "./components/Title";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Title logoText="Tejas Ganvit"/>
      <div className="value">{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
      <Footer/>
    </div>
  );
}
export default App;
