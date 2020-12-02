import Navigation from "./Navigation";

export default {
  title: "Component/Navigation",
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;
export const Home = Template.bind({});
Home.args = {
  activePath: "/",
};
export const List = Template.bind({});
List.args = {
  activePath: "/list",
};
export const Calender = Template.bind({});
Calender.args = {
  activePath: "/calender",
};
export const Mood = Template.bind({});
Mood.args = {
  activePath: "/mood",
};
