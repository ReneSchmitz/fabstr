import { useEffect, useState } from "react";
import { getGroceries } from "../utils/api";

export default function GroceriesList() {
  const [grocery, setGrocery] = useState(null);

  useEffect(() => {
    async function doGet() {
      const grocery = await getGroceries();
      setGrocery(grocery);
      console.log(grocery);
      console.log(grocery.title, grocery.name);
    }
    doGet();
  }, []);

  return (
    <>{grocery && grocery.title?.map((fruits) => <div key={fruits}></div>)}</>
  );
}
