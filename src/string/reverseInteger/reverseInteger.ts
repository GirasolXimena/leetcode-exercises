export const reverseInteger = (s: string) => {
  let num = Number(s);
  if(isNaN(num)) num = 0;
  if(num > (2 ** 31)) num = 0;
  if(num < -(2 ** 31) - 1) num = 0;
  return num;
}