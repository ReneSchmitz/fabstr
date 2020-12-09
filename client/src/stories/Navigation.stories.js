import { MemoryRouter } from "react-router-dom";
import Navigation from "../components/Navigation";

export default {
  title: "Component/Navigation",
  component: Navigation,
};

const Template = (args) => {
  return (
    <MemoryRouter>
      <Navigation {...args} />
    </MemoryRouter>
  );
};
export const Home = Template.bind({});
Home.args = {
  activePath: "/",
};
export const List = Template.bind({});
List.args = {
  activePath: "/list",
};
export const Calendar = Template.bind({});
Calendar.args = {
  activePath: "/calendar",
};
export const Mood = Template.bind({});
Mood.args = {
  activePath: "/mood",
};
