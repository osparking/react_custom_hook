import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(
    (e) => {
      async function fetchRecipeList() {
        const response = await fetch(url);
        const responseRecipies = await response.json();
        // console.log(responseRecipies.results);
        setData(responseRecipies.results);
      }
      fetchRecipeList();
    },
    [url]
  );

  return [data];
};

export default useFetch;
