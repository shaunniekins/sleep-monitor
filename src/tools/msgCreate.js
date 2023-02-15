import {
  fitbitSummaryAwake,
  fitbitSummaryRem,
  fitbitSummaryLight,
  fitbitSummaryDeep,
  totalSleepMinutes,
  SLEEP_MIN,
  AWAKE_MIN,
  AWAKE_MAX,
  REM_MIN,
  REM_MAX,
  LIGHT_MIN,
  LIGHT_MAX,
  DEEP_MIN,
  DEEP_MAX,
} from "../api/sleepData";

export let msg;

const percentAwake = fitbitSummaryAwake / totalSleepMinutes;
const percentREM = fitbitSummaryRem / totalSleepMinutes;
const percentLight = fitbitSummaryLight / totalSleepMinutes;
const percentDeep = fitbitSummaryDeep / totalSleepMinutes;

if (totalSleepMinutes >= SLEEP_MIN) {
  if (percentAwake >= AWAKE_MIN && percentAwake <= AWAKE_MAX) {
    // msg = `You had a normal amount of wakefulness during sleep.`;
    msg = `NORMAL: Wakefulness`;
  } else if (percentAwake < AWAKE_MIN) {
    msg = `LOW: Wakefulness`;
  } else {
    msg = `HIGH: Wakefulness`;
  }
  msg += "\n";

  if (percentREM >= REM_MIN && percentREM <= REM_MAX) {
    // msg += `You spent a normal amount of time in REM sleep.`;
    msg += `NORMAL: REM Sleep`;
  } else if (percentREM < REM_MIN) {
    msg += `LOW: REM Sleep`;
  } else {
    msg += `HIGH: REM Sleep`;
  }
  msg += `\n\n`;

  if (percentLight >= LIGHT_MIN && percentLight <= LIGHT_MAX) {
    // msg += `You spent a normal amount of time in light sleep.`;
    msg += `NORMAL: Light Sleep`;
  } else if (percentLight < LIGHT_MIN) {
    msg += `LOW: Light Sleep`;
  } else {
    msg += `HIGH: Light Sleep`;
  }
  msg += `\n`;

  if (percentDeep >= DEEP_MIN && percentDeep <= DEEP_MAX) {
    // msg += `You spent a normal amount of time in deep sleep.`;
    msg += `NORMAL: Deep Sleep`;
  } else if (percentDeep < DEEP_MIN) {
    msg += `LOW: Deep Sleep`;
  } else {
    msg += `HIGH: Deep Sleep`;
  }
} else {
  msg = `Lack the recommended amount of sleep!`;
}
