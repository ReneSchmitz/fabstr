import GlobalStyle from "../src/GlobalStyles";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  layout: "centered",
  backgrounds: {
    default: "fabstr",
    values: [
      {
        name: "fabstr",
        value: "#EFF2F8",
      },
      {
        name: "white",
        value: "#FFFFFF",
      },
      {
        name: "black",
        value: "#202020",
      },
    ],
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};
