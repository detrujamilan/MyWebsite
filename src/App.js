import { useState } from "react";
import "./App.css";
import Home from "./Router/Home";
import Footer from "./components/Footer";

function App() {
  const [darktheme, setDarkTheme] = useState(false);
  return (
    <div className={`${darktheme ? "bg-white" : " bg-ebony"}`}>
      <Home darktheme={darktheme} setDarkTheme={setDarkTheme} />
      <Footer  />
    </div>
  );
}

export default App;
