import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFruits, getDrinks, getVegetables, getCereals } from "../utils/api";
import GetCheckBox from "./Checkbox";

const Container = styled.div`
  /* position: fixed; */
  height: 60vh;
  overflow: scroll;
  text-decoration: none;
  width: 70%;
  @media (min-device-width: 450px) {
    width: 50%;
  }
  li {
    list-style-type: none;
    margin: 0px;
    padding: 0.8em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-weight: 800;
  }
`;

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
    <Container>
      <ul>
        <h2>Obst</h2>
        <hr />
        {getFruit &&
          getFruit.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
        <br />
        <h2>Getränke</h2>
        <hr />
        {getDrink &&
          getDrink.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}

        <br />
        <h2>Gemüse</h2>
        <hr />
        {getVegetable &&
          getVegetable.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
        <br />
        <h2>Getreide</h2>
        <hr />
        {getCereal &&
          getCereal.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
      </ul>
    </Container>
  );
}
