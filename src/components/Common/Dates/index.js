import moment from 'moment';

export function convertToYear(date) {
  date = moment(date).format('YYYY');
  return date;
}
