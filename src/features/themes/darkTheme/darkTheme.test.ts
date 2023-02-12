import { darkTheme } from "./darkTheme";

it("checks darkTheme's snapshot", () => {
  expect(darkTheme).toMatchSnapshot();
});
