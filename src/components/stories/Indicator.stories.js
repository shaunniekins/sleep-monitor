import React from "react";
import Indicator from "../Indicator";

export default {
  title: "Indicator/Indicator",
  component: Indicator,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Indicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  indicatorColor: "purple",
  textColor: "#f2f2f2",
  borderColor: "#22222a",
};

export const Light = Template.bind({});
Light.args = {
  indicatorColor: "purple",
  textColor: "#f2f2f2",
  borderColor: "#f2f2f2",
};

export const Light_Alternative = Template.bind({});
Light_Alternative.args = {
  indicatorColor: "#CBC3E3",
  textColor: "#22222a",
  borderColor: "#f2f2f2",
};
