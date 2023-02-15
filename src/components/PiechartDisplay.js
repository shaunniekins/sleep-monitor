import React, { useState, useContext } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { DATA, COLORS } from "../displayData";
import { fullDateStart, fullDateEnd } from "../api/dateData";
import PropTypes from "prop-types";
import ThemeModeContext from "./ThemeModeContext";

const PiechartDisplay = ({
  textColor,
  startDateLabel = fullDateStart,
  endDateLabel = fullDateEnd,
  awakeColor = COLORS[0],
  remColor = COLORS[1],
  lightColor = COLORS[2],
  deepColor = COLORS[3],
  heightAlign = "none",
  widthAlign = "none",
}) => {
  const { isDarkMode } = useContext(ThemeModeContext);
  if (textColor === undefined) {
    textColor = isDarkMode ? "#f2f2f2" : "#22222a";
  }
  const [activeIndex, setActiveIndex] = useState(0);

  const resCOLORS = [awakeColor, remColor, lightColor, deepColor];
  const height = heightAlign !== "none" ? Number(heightAlign) : heightAlign;
  const width = widthAlign !== "none" ? Number(widthAlign) : widthAlign;

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;
    return (
      <g>
        <text textAnchor="middle">
          <tspan x={cx} y={cy - 5} fill={fill} fontWeight={"bold"}>
            {" "}
            {/* Update color of tspan based on textColor */}
            {`${payload.name}`}
          </tspan>
          <tspan x={cx} y={cy + 15} fill={fill}>
            {`${payload.time}`}
          </tspan>
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />

        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <Flex
      direction={"column"}
      align={"center"}
      w={width}
      h={height}
      userSelect={"none"}
    >
      <>
        <ResponsiveContainer
          pl={"1rem"}
          width="100%"
          aspect={1}
          align={"center"}
        >
          <PieChart width={100} height={100}>
            <Pie
              data={DATA}
              dataKey="value"
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              // cx="35%"
              // cy="40%"
              cx={"auto"}
              cy={"auto"}
              innerRadius={60}
              outerRadius={70}
              stroke="none"
              fill="#8884d8"
              onMouseEnter={onPieEnter}
            >
              {DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={resCOLORS[index % resCOLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </>
      <Text mt={"3px"} fontSize="7pt" fontStyle={"italic"} color={textColor}>
        {`${startDateLabel} - ${endDateLabel}`}
      </Text>
    </Flex>
  );
};

PiechartDisplay.propTypes = {
  textColor: PropTypes.string,
  startDateLabel: PropTypes.string,
  endDateLabel: PropTypes.string,
  awakeColor: PropTypes.string,
  remColor: PropTypes.string,
  lightColor: PropTypes.string,
  deepColor: PropTypes.string,
  // alignX: PropTypes.string,
  // alignY: PropTypes.string,
  heightAlign: PropTypes.string,
  widthAlign: PropTypes.string,
};

export default PiechartDisplay;
