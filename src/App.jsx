import { useState, useEffect } from "react";
import recipesFile from "./resources/pastas.json";
import "./App.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";

function App() {
  const [data, setData] = useState([{ id: 1, title: "어머나" }, { id: 3, title: "구름이" }]);
  const [localRun, setLocalRun] = useState(false);
  const [query, setQuery] = useState("pizza");

  useEffect(
    (e) => {
      async function fetchRecipeList() {
        if (localRun) {
          console.log("레시피", recipesFile);
          setData(recipesFile);
        } else {
          const response = await fetch(
            `${url}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
          );
          const responseRecipies = await response.json();
          console.log(responseRecipies.results);
          setData(responseRecipies.results);
        }
      }
      fetchRecipeList();
    },
    [query]
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
