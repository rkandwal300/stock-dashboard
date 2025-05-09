export const convertDateToUnixTimeStamp = (date) =>
  Math.floor(date.getTime() / 1000);

export const convertUnixTimeStampToDate = (UnixTimeStamp) =>
  new Date(Math.floor(UnixTimeStamp * 1000)).toLocaleDateString();
export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setDate(newDate.getMonth() + months);
  newDate.setDate(newDate.getFullYear() + years);
  return newDate
};
