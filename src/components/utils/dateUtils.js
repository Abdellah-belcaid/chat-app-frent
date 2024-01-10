export const shouldDisplayDateSeparator = (currentIndex, messages) => {
  const isSameDay = (date1, date2) =>
    date1.toDateString() === date2.toDateString();

  return (
    currentIndex === 0 ||
    !isSameDay(
      messages[currentIndex - 1].timestamp,
      messages[currentIndex].timestamp
    )
  );
};

export const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

// Function to format a date as "YYYY-MM-DD"
const formatDate = (date) => {
  return date ? new Date(date).toISOString().split("T")[0] : null;
};

// Function to check if the date is yesterday
const isYesterday = (date) => {
  const formattedDate = formatDate(date);
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split("T")[0];

  return formattedDate === yesterday;
};

export { formatDate, isYesterday };
