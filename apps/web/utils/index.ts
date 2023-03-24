export const formatDate = (date: Date) => {
  const _ = new Date(date);
  const monthYear = `${_.getMonth() + 1}/${_.getFullYear()}`;

  return monthYear;
};
