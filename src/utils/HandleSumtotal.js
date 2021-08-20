export const handleSumTotal = (product) => {
  const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
  const sum = product.reduce(reducer, 0);
  return sum;
};
