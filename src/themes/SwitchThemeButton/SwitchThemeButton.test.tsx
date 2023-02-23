import renderer from "react-test-renderer";

import { SwitchThemeButton } from "./SwitchThemeButton";

describe("SwitchThemeButton", () => {
  it("checks SwitchThemeButton's snapshot", () => {
    const tree = renderer.create(<SwitchThemeButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
