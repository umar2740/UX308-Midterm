import { earthquakeDamage } from '../q5.js'

describe("A suite", function() {
   it("contains spec with an expectation", function() {
     let value = earthquakeDamage(8.0);
     expect(value).toBe("Catastrophe: most buildings destroyed");
   });
   it("contains spec with an expectation", function() {
       let value = earthquakeDamage(4.9);
       expect(value).toBe("Little or no damage");
     });
     it("contains spec with an expectation", function() {
       let value = earthquakeDamage(5.2);
       expect(value).toBe("Some damage");
     });
     it("contains spec with an expectation", function() {
       let value = earthquakeDamage(6.0);
       expect(value).toBe("Serious damage: walls may crack or fall");
     });
     it("contains spec with an expectation", function() {
       let value = earthquakeDamage(7.0);
       expect(value).toBe("Disaster: buildings may collapse");
     });
 });