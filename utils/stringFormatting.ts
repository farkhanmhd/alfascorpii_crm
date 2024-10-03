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
