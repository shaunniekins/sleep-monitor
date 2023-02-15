import React from "react";
import RightSideDisplay from "../RightSideDisplay";
import { COLORS } from "../../displayData";

export default {
  title: "Display/RightSideDisplay",
  component: RightSideDisplay,
  args: {
    // alignmentEx: "flex-start",
    awakeColor: COLORS[0],
    remColor: COLORS[1],
    lightColor: COLORS[2],
    deepColor: COLORS[3],
    activeColor: "orange",
    alignmentEx: "flex-start",
  },
  argTypes: {},
};

const Template = (args) => <RightSideDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: "#f2f2f2",
};

export const Light = Template.bind({});
Light.args = {
  textColor: "#22222a",
};
