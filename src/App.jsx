import { useState, useEffect } from "react";
import "./App.css";
import ChartCard from "./Components/ChartCard";
import Data from ".././data.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // setData(Data);
    console.log(Data);
  }, []);

  return (
    <>
      <ChartCard />
    </>
  );
}

export default App;
