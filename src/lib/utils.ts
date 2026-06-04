export function formatDate(date: Date) {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

export function formatDateRange(startDate: Date, endDate: Date) {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  return `${formattedStartDate} - ${formattedEndDate}`;
}
