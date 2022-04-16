import DisplayQuote from "./components/DisplayQuote";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [simpsonQuote, setSimpsonQuote] = useState("");

  const getSimpsonQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes/")
      .then((response) => response.data)
      .then((data) => setSimpsonQuote(data[0]));
  };

  useEffect(() => {
    getSimpsonQuote();
  }, []);

  return (
    <div className="App">
      <DisplayQuote simpsonQuote={simpsonQuote} />
      <button type="button" onClick={getSimpsonQuote}>
        Get another simpson quote
      </button>
    </div>
  );
}

export default App;
