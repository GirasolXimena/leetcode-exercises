// 2,147,483,647  (start from 0)
//  214,748,364
// -2,147,483,648 (start from -1)

// -214,748,364


export function reverseInteger(x: number): number {
  let reverseInt = 0
  let pop = 0
  let num = Math.abs(x)

  while (num !== 0) {
      pop = num % 10

      num = (num - pop) / 10

      if (reverseInt > (2 ** 31) / 10 || (reverseInt === (2 ** 31) / 10 && pop > 7)) {
          return 0

      }
      if (reverseInt < -(2 ** 31) / 10 || (reverseInt === -(2 ** 31) / 10 && pop < -8)) {
          return 0
      }

      reverseInt = reverseInt * 10 + pop
  }


  return x > 0 ? reverseInt : -reverseInt
}

