import { useEffect, useState } from "react";
import { getGroceries } from "../utils/api";

export default function GroceriesList() {
  const [groceries, setGroceries] = useState(null);

  useEffect(() => {
    async function doGet() {
      const groceries = await getGroceries();
      setGroceries(groceries);
    }
    doGet();
  }, []);

  return <>{groceries}</>;
}
