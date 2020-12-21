import Happiness from "../components/Mood";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Component/Happiness",
  component: Happiness,
};

export const Happyness_Daily = () => {
  return (
    <MemoryRouter>
      <Happiness />
    </MemoryRouter>
  );
};
