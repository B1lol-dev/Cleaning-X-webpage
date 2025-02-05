export const formatNumberToKMB = (num: number): string => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(0) + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(0) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(0) + "K";
  } else {
    return num.toString();
  }
};
