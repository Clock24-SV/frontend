export const calculateTimeLeft = () => {
  const now = new Date();
  const tomorrow = new Date(now);

  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const difference = tomorrow.getTime() - now.getTime();

  return Math.floor(difference / 1000);
};
