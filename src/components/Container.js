import { React, useState } from "react";
import { Card, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ThemeModeContext from "./ThemeModeContext";

const Container = ({
  children,
  label = "Sleep Monitor",
  labelSize = "11px",
  cardBg,
  textColor,
  containerSize = "284px / 264px",
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  let heightValue, widthValue;
  // console.log(cardBg);
  if (cardBg === undefined) {
    cardBg = isDarkMode ? "#22222a" : "#f2f2f2";
    textColor = isDarkMode ? "#f2f2f2" : "#22222a";
  }

  [heightValue, widthValue] = containerSize.split(" / ");
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeModeContext.Provider value={{ isDarkMode }}>
      <Card
        position="relative"
        h={heightValue}
        w={widthValue}
        bg={cardBg}
        py={"0.25rem"}
        px={"0.75rem"}
        borderRadius={"10px"}
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.5)"
      >
        <Flex>
          <Text
            pb={"0.3rem"}
            cursor={"pointer"}
            userSelect={"none"}
            color={textColor}
            fontSize={labelSize}
            fontWeight={"400"}
            onClick={handleToggle}
          >
            {label}
          </Text>
        </Flex>
        {children}
      </Card>
    </ThemeModeContext.Provider>
  );
};

Container.propTypes = {
  label: PropTypes.string,
  labelSize: PropTypes.oneOf([
    "9px",
    "10px",
    "11px",
    "12px",
    "13px",
    "14px",
    "15px",
  ]),
  containerSize: PropTypes.oneOf([
    "284px / 264px",
    "284px / 600px",
    "600px / 264px",
    "600px / 600px",
  ]),
  cardBg: PropTypes.oneOf(["#22222a", "#f2f2f2"]),
  textColor: PropTypes.oneOf(["#22222a", "#f2f2f2"]),
};

export default Container;
