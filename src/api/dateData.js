import moment from "moment";
import { startSleepTime, endSleepTime } from "./sleepData";

const today = moment();
export const currentDate = today.format("ddd, MMMM D");

// retrieved date
const dateStart = moment(startSleepTime);
// export const fullDateStart = dateStart.format("MMM Do, hh:mm");
export const fullDateStart = dateStart.format("hh:mmA");
// console.log("Start: " + fullDateStart);

const dateEnd = moment(endSleepTime);
export const fullDateEnd = dateEnd.format("hh:mmA");
// console.log("End: " + fullDateEnd);
