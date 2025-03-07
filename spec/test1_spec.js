import { totalCoinValue } from '../q1.js'

describe("A suite", function() {
   it("contains spec with an expectation", function() {
     let value = totalCoinValue(10, 1, 16, 12, 11);
     expect(value).toBe(38.6);
   });
   it("contains spec with an expectation", function() {
       let value = totalCoinValue(2, 5, 4, 8, 6);
       expect(value).toBe(21.6);
     });
     it("contains spec with an expectation", function() {
       let value = totalCoinValue(0, 0, 0, 0, 0);
       expect(value).toBe(0);
 });
});
