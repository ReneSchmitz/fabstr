import { useEffect, useState } from "react";
import { getFruits, getDrinks, getVegetables, getCereals } from "../utils/api";

export default function GroceriesList() {
  const [getFruit, setFruit] = useState(null);
  const [getDrink, setDrink] = useState(null);
  const [getVegetable, setVegetable] = useState(null);
  const [getCereal, setCereal] = useState(null);

  useEffect(() => {
    async function doGet() {
      const fruit = await getFruits();
      setFruit(fruit);
    }
    doGet();
  }, []);

  useEffect(() => {
    async function doGet() {
      const drink = await getDrinks();
      setDrink(drink);
    }
    doGet();
  }, []);

  useEffect(() => {
    async function doGet() {
      const vegetable = await getVegetables();
      setVegetable(vegetable);
    }
    doGet();
  }, []);

  useEffect(() => {
    async function doGet() {
      const cereal = await getCereals();
      setCereal(cereal);
    }
    doGet();
  }, []);

  return (
    <>
      {getFruit &&
        getFruit.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
      {getDrink &&
        getDrink.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
      {getVegetable &&
        getVegetable.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
      {getCereal &&
        getCereal.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
    </>
  );
}
