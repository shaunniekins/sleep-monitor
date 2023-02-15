import { useState, useContext } from "react";
import { Text, Flex } from "@chakra-ui/react";

import { dateTimeConversion } from "../tools/dateConversion";
import { totalTimeInBed, totalSleepMinutes } from "../api/sleepData";
import { msg } from "../tools/msgCreate";
import PropTypes from "prop-types";
import ThemeModeContext from "./ThemeModeContext";

const Indicator = ({
  indicatorColor = "purple",
  textColor = "#f2f2f2",
  borderColor,
  timeInBedLabel = dateTimeConversion(totalTimeInBed),
  sleepLabel = dateTimeConversion(totalSleepMinutes),
  msgLabel = msg,
}) => {
  const { isDarkMode } = useContext(ThemeModeContext);
  const [isClicked, setIsClicked] = useState(false);

  if (borderColor === undefined) {
    borderColor = isDarkMode ? "#22222a" : "#f2f2f2";
  }
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Flex direction={"column"} justify={"space-between"} userSelect={"none"}>
      <Flex
        direction={"row"}
        h={"2.5rem"}
        w={"15rem"}
        bg={indicatorColor}
        borderRadius={"6px"}
        justify={"center"}
        cursor={"pointer"}
        className="card-stats"
        onClick={handleClick}
      >
        {isClicked ? (
          <Flex
            direction={"column"}
            align={"center"}
            px={"3"}
            justify={"center"}
            color={textColor}
          >
            {msgLabel.split("\n\n").map((line, index) => (
              <Text
                key={index}
                textAlign={"center"}
                fontWeight={"500"}
                fontSize={"12px"}
                lineHeight={"1.5"}
              >
                {line}
              </Text>
            ))}
          </Flex>
        ) : (
          <Flex>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              borderRight={"solid"}
              borderRightColor={borderColor}
              w={"7.5rem"}
              lineHeight={"1.25"}
            >
              <Text fontWeight={"500"} fontSize={"12px"} color={textColor}>
                Total Time in Bed
              </Text>
              <Text fontWeight={"600"} fontSize={"18px"} color={textColor}>
                {timeInBedLabel}
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              borderLeft={"solid"}
              borderLeftColor={borderColor}
              w={"7.5rem"}
              lineHeight={"1.25"}
            >
              <Text fontWeight={"500"} fontSize={"12px"} color={textColor}>
                Total Sleep
              </Text>
              <Text fontWeight={"600"} fontSize={"18px"} color={textColor}>
                {sleepLabel}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

Indicator.propTypes = {
  indicatorColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.oneOf(["#22222a", "#f2f2f2"]),
  timeInBedLabel: PropTypes.string,
  sleepLabel: PropTypes.string,
  msgLabel: PropTypes.string,
  // handleClick: PropTypes.func,
};

export default Indicator;
