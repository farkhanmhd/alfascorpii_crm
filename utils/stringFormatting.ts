export const formatToRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(value);
};

export const splitAndJoinUnderscore = (str) => {
  return str.split("_").join(" ");
};

export const dateObject = (dateString) => {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // Month is 0-based
};
