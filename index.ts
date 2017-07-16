type Average = number;
type Increment = number;
type AddFn = {(...numbers: number[]): Increment;}
type GetAverageFn = {(): Average;}
type GetIncrementFn = {(): Increment;}


interface IncrementalAverageObject {
  add: AddFn,
  getAverage: GetAverageFn,
  getIncrement: GetIncrementFn
}


export default function incrementalAverage(...numbers: number[]): IncrementalAverageObject {
  let average: Average = 0;
  let increment: Increment = 0;

  const incrementalAverageObject: IncrementalAverageObject = {
    add: (...numbers) => {
      numbers.forEach((a) => {
        increment += 1;
        average = (average * (increment - 1) + a) / increment;
      });
      return average;
    },
    getAverage: () => {
      return average;
    },
    getIncrement: () => {
      return increment;
    }
  };

  incrementalAverageObject.add(...numbers);

  return incrementalAverageObject
}
