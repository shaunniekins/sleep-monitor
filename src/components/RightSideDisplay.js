import { useContext } from "react";
import { Flex, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { COLORS } from "../displayData";
import {
  fitbitSummaryAwake,
  fitbitSummaryRem,
  fitbitSummaryLight,
  fitbitSummaryDeep,
  activeSummary,
} from "../api/sleepData";
import { dateTimeConversion } from "../tools/dateConversion";
import { currentDate } from "../api/dateData";
import PropTypes from "prop-types";
import ThemeModeContext from "./ThemeModeContext";

const RightSideDisplay = ({
  textColor,
  alignmentEx = "flex-end",
  todayLabel = "TODAY",
  currentDateLabel = currentDate,
  awakeColor = COLORS[0],
  remColor = COLORS[1],
  lightColor = COLORS[2],
  deepColor = COLORS[3],
  activeColor = "orange",

  awakeLabel = dateTimeConversion(fitbitSummaryAwake),
  remLabel = dateTimeConversion(fitbitSummaryRem),
  lightLabel = dateTimeConversion(fitbitSummaryLight),
  deepLabel = dateTimeConversion(fitbitSummaryDeep),
  activeLabel = dateTimeConversion(activeSummary),
}) => {
  const { isDarkMode } = useContext(ThemeModeContext);
  if (textColor === undefined) {
    textColor = isDarkMode ? "#f2f2f2" : "#22222a";
  }

  return (
    <Flex
      direction={"column"}
      align={alignmentEx}
      color={textColor}
      userSelect={"none"}
    >
      <Text fontSize={"11px"} fontWeight={"700"}>
        {todayLabel}
      </Text>
      <Text fontSize={"9.5px"} fontWeight={"700"}>
        {currentDateLabel}
      </Text>
      <Flex mt={"1rem"} direction={"column"}>
        <UnorderedList
          dir="rtl"
          direction={"column"}
          gap={"2.5rem"}
          fontSize={"9px"}
          fontWeight={"600"}
          textAlign={"center"}
          lineHeight={1.25}
          letterSpacing={"1px"}
        >
          <Stack spacing="6px">
            <ListItem style={{ color: awakeColor }}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Text>{awakeLabel}</Text>
                <Text>Awake</Text>
              </Flex>
            </ListItem>
            <ListItem style={{ color: remColor }}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Text>{remLabel}</Text>
                <Text>REM</Text>
              </Flex>
            </ListItem>
            <ListItem style={{ color: lightColor }}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Text>{lightLabel}</Text>
                <Text>Light</Text>
              </Flex>
            </ListItem>
            <ListItem style={{ color: deepColor }}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Text>{deepLabel}</Text>
                <Text>Deep</Text>
              </Flex>
            </ListItem>
            {/* change the color here */}
            <ListItem style={{ color: activeColor }}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Text>{activeLabel}</Text>
                <Text>Active</Text>
              </Flex>
            </ListItem>
          </Stack>
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

RightSideDisplay.propTypes = {
  textColor: PropTypes.oneOf(["#22222a", "#f2f2f2"]),
  todayLabel: PropTypes.string,
  currentDateLabel: PropTypes.string,
  awakeColor: PropTypes.string,
  remColor: PropTypes.string,
  lightColor: PropTypes.string,
  deepColor: PropTypes.string,
  activeColor: PropTypes.string,
  alignmentEx: PropTypes.string,
  awakeLabel: PropTypes.string,
  remLabel: PropTypes.string,
  lightLabel: PropTypes.string,
  deepLabel: PropTypes.string,
  activeLabel: PropTypes.string,
};

export default RightSideDisplay;

//onClick and others -setup
