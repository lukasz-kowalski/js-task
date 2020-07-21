export const formatDate = (date) => {
  let dateToFormat = new Date(date);
  const offset = dateToFormat.getTimezoneOffset();
  dateToFormat = new Date(dateToFormat.getTime() + offset * 60 * 1000);
  return dateToFormat.toISOString().split('T')[0];
};

export const calculateBeforeDate = baseDate => new Date().setDate(baseDate.getDate() - 30);
