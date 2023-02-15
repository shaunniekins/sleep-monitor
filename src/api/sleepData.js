import FITBIT from "@prifina/fitbit-data";

export const fitbitSummaryAwake = FITBIT.SleepSummary[0].wake.minutes;
export const fitbitSummaryRem = FITBIT.SleepSummary[0].rem.minutes;
export const fitbitSummaryLight = FITBIT.SleepSummary[0].light.minutes;
export const fitbitSummaryDeep = FITBIT.SleepSummary[0].deep.minutes;
export const activeSummary = FITBIT.HeartRateSummary[0].FAT_BURN.mins;

// export const fitbitSummaryAwake = Math.floor(
//   Math.random() * FITBIT.SleepSummary[0].wake.minutes
// );
// export const fitbitSummaryRem =
//   Math.floor(Math.random() * FITBIT.SleepSummary[0].rem.minutes) + 160;
// export const fitbitSummaryLight = Math.floor(
//   Math.random() * FITBIT.SleepSummary[0].light.minutes
// );
// export const fitbitSummaryDeep =
//   Math.floor(Math.random() * FITBIT.SleepSummary[0].deep.minutes) + 100;
// export const activeSummary = Math.floor(
//   Math.random() * FITBIT.HeartRateSummary[0].FAT_BURN.mins
// );

export const startSleepTime = new Date(FITBIT.SleepSummary[0].startTimeTS);
export const endSleepTime = new Date(FITBIT.SleepSummary[0].endTimeTS);

export const totalTimeInBed =
  fitbitSummaryAwake +
  fitbitSummaryRem +
  fitbitSummaryLight +
  fitbitSummaryDeep;

export const totalSleepMinutes =
  fitbitSummaryRem + fitbitSummaryLight + fitbitSummaryDeep;

// Minimum percent (based on Fitbit blog)
export const SLEEP_MIN = 420;

export const AWAKE_MIN = totalSleepMinutes * 0.05;
export const AWAKE_MAX = totalSleepMinutes * 0.1;

export const REM_MIN = totalSleepMinutes * 0.2;
export const REM_MAX = totalSleepMinutes * 0.25;

export const LIGHT_MIN = totalSleepMinutes * 0.5;
export const LIGHT_MAX = totalSleepMinutes * 0.6;

export const DEEP_MIN = totalSleepMinutes * 0.2;
export const DEEP_MAX = totalSleepMinutes * 0.25;
