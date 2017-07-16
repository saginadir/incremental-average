type Sum = number;
type Increment = number;
type AddFn = {(...numbers: number[]): Increment;}
type GetSumFn = {(): Sum;}
type GetIncrementFn = {(): Increment;}


interface IncrementalAverageObject {
  add: AddFn,
  getSum: GetSumFn,
  getIncrement: GetIncrementFn
}


export default function incrementalAverage(...numbers: number[]): IncrementalAverageObject {
  let sum: Sum = 0;
  let increment: Increment = 0;

  const incrementalAverageObject: IncrementalAverageObject = {
    add: (...numbers) => {
      numbers.forEach((a) => {
        increment += 1;
        sum = (sum * (increment - 1) + a) / increment;
      });
      return sum;
    },
    getSum: () => {
      return sum;
    },
    getIncrement: () => {
      return increment;
    }
  };

  incrementalAverageObject.add(...numbers);

  return incrementalAverageObject
}
