import { fahrenheitToCelsius } from '../q2.js'

describe("A suite", function() {
   it("contains spec with an expectation", function() {
     let value = fahrenheitToCelsius(212);
     expect(value).toBe(100);
   });
   it("contains spec with an expectation", function() {
       let value = fahrenheitToCelsius(32);
       expect(value).toBe(0);
     });
     it("contains spec with an expectation", function() {
       let value = fahrenheitToCelsius(70);
       expect(value).toBe(21.11111111111111);
     });
 });
