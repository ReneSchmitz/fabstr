import { useEffect, useState } from "react";
import { getGroceries } from "../utils/api";

export default function GroceriesList() {
  const [groceries, setGroceries] = useState(null);

  useEffect(() => {
    async function doGet() {
      const groceries = await getGroceries();
      setGroceries();
      console.log(groceries);
    }
    doGet();
  }, []);

  return (
    <>
      {groceries.title?.map((title) => (
        <div key={title}></div>
      ))}
    </>
  );
}
