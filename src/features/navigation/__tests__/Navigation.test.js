import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Navigation } from "../components/Navigation";

test("Navigation snapshot", () => {
  const wrapper = shallow(<Navigation />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
