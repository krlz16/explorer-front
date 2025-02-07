export const isValidBlockNumber = (
  value: string | number,
  lastBlock: number,
) => {
  let newValue = value;
  if (value.toString().includes(','))
    newValue = value.toString().replaceAll(',', '');
  if (newValue.toString().includes('0x')) return { isBlock: false };

  const number = Number(newValue);
  lastBlock = lastBlock || number;
  return {
    isBlock: number > -1 && number <= lastBlock,
    block: number,
  };
};
