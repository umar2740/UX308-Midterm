import { cubeVolume } from '../q3.js'

describe("A suite", function() {
   it("contains spec with an expectation", function() {
     let value = cubeVolume(2);
     expect(value).toBe(8);
   });
   it("contains spec with an expectation", function() {
       let value = cubeVolume(0);
       expect(value).toBe(0);
     });
     it("contains spec with an expectation", function() {
       let value = cubeVolume(5);
       expect(value).toBe(125);
     });
 });
