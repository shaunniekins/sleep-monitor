import React from "react";
import Container from "../Container";

export default {
  title: "Container/Container",
  component: Container,
  args: {
    label: "Sleep Monitor",
    labelSize: "11px",
    containerSize: "284px / 264px",
  },
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardBg: "#22222a",
  textColor: "#f2f2f2",
};

export const Light = Template.bind({});
Light.args = {
  cardBg: "#f2f2f2",
  textColor: "#22222a",
};
