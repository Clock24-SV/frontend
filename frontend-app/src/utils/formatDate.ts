export const formatDate = (date?: Date) => {
  const today = date ? new Date(date) : new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const dateString = year + "-" + month + "-" + day;

  return dateString;
};
