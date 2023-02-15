import React from "react";
import PiechartDisplay from "../PiechartDisplay";
import { COLORS } from "../../displayData";

export default {
  title: "Display/PiechartDisplay",
  component: PiechartDisplay,
  args: {
    heightAlign: "200",
    widthAlign: "200",

    awakeColor: COLORS[0],
    remColor: COLORS[1],
    lightColor: COLORS[2],
    deepColor: COLORS[3],
  },
};

const Template = (args) => <PiechartDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: "#f2f2f2", //supposed to use the 'custom.secondary_color' however it cannot be applied in graph rendering
};

export const Light = Template.bind({});
Light.args = {
  textColor: "#222222", //supposed to use the 'custom.primary_color' however it cannot be applied in graph rendering
};
