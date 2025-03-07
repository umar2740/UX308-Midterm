import { gymMembershipCost } from '../q4.js'

describe("A suite", function() {
   it("contains spec with an expectation", function() {
     let value = gymMembershipCost(100, 2);
     expect(value).toBe(90);
   });
   it("contains spec with an expectation", function() {
       let value = gymMembershipCost(100, 0);
       expect(value).toBe(100);
     });
     it("contains spec with an expectation", function() {
       let value = gymMembershipCost(100, 1);
       expect(value).toBe(95);
     });
     it("contains spec with an expectation", function() {
       let value = gymMembershipCost(100, 3);
       expect(value).toBe(85);
     });
     it("contains spec with an expectation", function() {
       let value = gymMembershipCost(100, 4);
       expect(value).toBe(85);
     });
 });
