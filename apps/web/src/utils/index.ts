export const formatDate = (date: Date) => {
  const __ = new Date(date);
  const monthYear = `${__.getMonth() + 1}/${__.getFullYear()}`;

  return monthYear;
};
