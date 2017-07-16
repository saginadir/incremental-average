# incremental-average

I use this library to help me deal with [incremental averaging](https://math.stackexchange.com/questions/106700/incremental-averageing)

## How to use

### Install

Regular npm install

```
npm install incremental-average --save
```

### Use

`incrementalAverage` will return an object that has the following interface:

* `add()` - will receive one or many numbers as parameters, add them tot he average, and will return the average.
* `getAverage()` - will return the average
* `getIncrement()` - will return the n position of the last incremented number

```js
import incrementalAverage from 'incremental-average'
 
const ia = incrementalAverage();

const averageOfOneToFive = ia.add(1,2,3,4,5); // 3
const averageOfOneToTen = ia.add(6,7,8,9,10); // 5.5
```

#### Alternative use

```js
import incrementalAverage from 'incremental-average'
 
const ia = incrementalAverage(1,2,3,4,5);

const averageOfOneToFive = ia.getAverage(); // 3
const averageOfOneToTen = ia.add(6,7,8,9,10); // 5.5
```