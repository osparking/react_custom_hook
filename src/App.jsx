import { useState } from "react";
import "./App.css";
import useFetch from "./utils/useFetch";

const url = "https://api.spoonacular.com/recipes/complexSearch";

function App() {
  const [query, setQuery] = useState("pasta");
  const [data] = useFetch(
    `${url}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
  );

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default App;
