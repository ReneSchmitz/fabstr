import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFruits, getDrinks, getVegetables, getCereals } from "../utils/api";
import GetCheckBox from "./Checkbox";

const Container = styled.div`
  position: relative;
  top: 8%;
  padding: 20px 0;
  height: 64vh;
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
    font-size: 1.1em;
    font-weight: 400;
    color: #ffffff;
  }
`;

const FramePink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: #e7b0ed;
  border-radius: 30px;
`;

const FrameGreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: #98e6b9;
  border-radius: 30px;
`;

const FrameOrange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: #f2c384;
  border-radius: 30px;
`;

const FrameGrey = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  background: lightgray;
  border-radius: 30px;
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
        <FramePink>
          <h2>Obst</h2>
        </FramePink>
        {getFruit &&
          getFruit.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
        <br />
        <FrameGreen>
          <h2>Getränke</h2>
        </FrameGreen>
        {getDrink &&
          getDrink.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}

        <br />
        <FrameOrange>
          <h2>Gemüse</h2>
        </FrameOrange>
        {getVegetable &&
          getVegetable.map((foodItem) => (
            <li key={foodItem.type}>
              {foodItem.name}
              <GetCheckBox />
            </li>
          ))}
        <br />
        <FrameGrey>
          <h2>Getreide</h2>
        </FrameGrey>
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
