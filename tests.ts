import incrementalAverage from './index'
import { expect } from 'chai';
import 'mocha';

describe('Basic Average Tests', () => {
    it('should return 3 when adding numbers using add()', () => {
        const ia = incrementalAverage();
        const averageOfOneToFive = ia.add(1,2,3,4,5);
        expect(averageOfOneToFive).to.equal(3);
    });

    it('should return 3 when adding numbers using constructor()', () => {
        const ia = incrementalAverage(1,2,3,4,5);
        const averageOfOneToFive = ia.getAverage();
        expect(averageOfOneToFive).to.equal(3);
    });
});

describe('Adding numbers to already computed average', () => {
    it('should return 5.5 when adding numbers using add()', () => {
        const ia = incrementalAverage();
        const averageOfOneToFive = ia.add(1,2,3,4,5);
        const averageOfOneToTen = ia.add(6,7,8,9,10);
        expect(averageOfOneToTen).to.equal(5.5);
    });

    it('should return 5.5 when adding numbers using constructor()', () => {
        const ia = incrementalAverage(1,2,3,4,5);
        const averageOfOneToFive = ia.getAverage();
        const averageOfOneToTen = ia.add(6,7,8,9,10); // 5.5
        expect(averageOfOneToTen).to.equal(5.5);
    });
});
