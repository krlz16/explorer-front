
export const parseDecimals = (data?: number, decimals: number = 2) => {
  if (data === undefined || data === 0) return '0';
  
  const value = Number(data);
  
  const factor = Math.pow(10, decimals);
  const roundedValue = Math.ceil(value * factor) / factor;

  if (roundedValue % 1 === 0) {
    return roundedValue.toLocaleString('en-US');
  }

  return roundedValue.toLocaleString('en-US', { 
    minimumFractionDigits: decimals, 
    maximumFractionDigits: decimals 
  });
};
