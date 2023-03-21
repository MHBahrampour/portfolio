import moment, { type Moment } from "moment";

export default function getMonthsFromNow(date: Moment) {
  const now = moment();
  const months = now.diff(moment(date), "months");
  return months;
}
