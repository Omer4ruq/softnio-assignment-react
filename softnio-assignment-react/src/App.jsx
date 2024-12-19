import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductPage from "./ProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductPage></ProductPage>
    </>
  );
}

export default App;
