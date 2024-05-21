import { useState, useEffect } from "react";
import { fetchData } from "./services/api";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return <>App</>;
}
