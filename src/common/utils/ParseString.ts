export const truncateStringByValue = (widthScreen: number, str: string) => {
  let maxChars = str.length;

  if (widthScreen <= 950) maxChars = 35;
  if (widthScreen <= 800) maxChars = 25;
  if (widthScreen <= 700) maxChars = 20;
  if (widthScreen <= 575) maxChars = 35;

  return str.substring(0, maxChars) + (str.length > maxChars ? '...' : '');
};
