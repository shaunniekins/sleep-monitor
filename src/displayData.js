import {
  fitbitSummaryAwake,
  fitbitSummaryRem,
  fitbitSummaryLight,
  fitbitSummaryDeep,
} from "./api/sleepData";
import { dateTimeConversion } from "./tools/dateConversion";

export const DATA = [
  {
    name: "Awake",
    value: fitbitSummaryAwake,
    time: dateTimeConversion(fitbitSummaryAwake),
  },
  {
    name: "REM",
    value: fitbitSummaryRem,
    time: dateTimeConversion(fitbitSummaryRem),
  },
  {
    name: "Light",
    value: fitbitSummaryLight,
    time: dateTimeConversion(fitbitSummaryLight),
  },
  {
    name: "Deep",
    value: fitbitSummaryDeep,
    time: dateTimeConversion(fitbitSummaryDeep),
  },
];

export const COLORS = ["#FF00FF", "#33CCDD", "#11BB77", "#3D3DF0"];
