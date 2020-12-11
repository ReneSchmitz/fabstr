import { useEffect, useState } from "react";
import { getFruits, getDrinks, getVegetables, getCereals } from "../utils/api";

export default function GroceriesList() {
  const [fruit, setFruit] = useState(null);
  const [drink, setDrink] = useState(null);
  const [vegetable, setVegetable] = useState(null);
  const [cereal, setCereal] = useState(null);

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
      {fruit &&
        fruit.map((foodItem) => <div key={foodItem.type}>{foodItem.name}</div>)}
      <br />
      {drink &&
        drink.map((foodItem) => <div key={foodItem.type}>{foodItem.name}</div>)}
      <br />
      {vegetable &&
        vegetable.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
      {cereal &&
        cereal.map((foodItem) => (
          <div key={foodItem.type}>{foodItem.name}</div>
        ))}
      <br />
    </>
  );
}
