import { useState } from "react";
import "./App.css";
import Home from "./Router/Home";
import Menu from "./components/Menu";

function App() {
  const [darktheme, setDarkTheme] = useState(false);
  return (
    <div className={`${darktheme ? "bg-white" : " bg-ebony"}`}>
      <Home darktheme={darktheme} setDarkTheme={setDarkTheme} />
      <Menu darktheme={darktheme} />
    </div>
  );
}

export default App;
