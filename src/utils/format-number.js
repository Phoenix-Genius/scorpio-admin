export const formatNumber = (number) => {
    const patt = /\B(?=(\d{3})+(?!\d))/g;
    const result = number.toString().replace(patt, ",");
    return result;
};
  