import { useEffect, useState } from "react";
import { getFruits, getDrinks, getVegetables, getCereals } from "../utils/api";
import GetCheckBox from "./Checkbox";

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
      <ul>
        <h2>Obst</h2>
        {getFruit &&
          getFruit.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name} <GetCheckBox />
            </li>
          ))}
        <br />
        <h2>Getränke</h2>
        {getDrink &&
          getDrink.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}

        <br />
        <h2>Gemüse</h2>
        {getVegetable &&
          getVegetable.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
        <br />
        <h2>Getreide</h2>
        {getCereal &&
          getCereal.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
      </ul>
    </>
  );
}
