import moment, { Moment } from 'moment';

export const defaultFormat = (date: Moment): string => {
  return date.format('YYYY-MM-DD');
};

export const getCurrentDate = () => {
  return defaultFormat(moment());
};

export const formatDateOutput = (
  date: string,
  time: string,
  timeType: string
): string => {
  return moment(`${date} ${time} ${timeType}`).format('YYYY-MM-DDTHH:mm');
};
