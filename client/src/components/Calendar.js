import SimpleReactCalendar from "simple-react-calendar";

export default function Calendar() {
  return (
    <>
      <SimpleReactCalendar activeMonth={new Date()} />
    </>
  );
}
