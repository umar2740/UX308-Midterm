function gymMembershipCost(cost, friends) {
    let discountRates = {0: 0, 1: 0.05, 2: 0.10, 3: 0.15};
    let discount = discountRates[friends] !== undefined ? discountRates[friends] : 0.15;
    return +(cost * (1 - discount));
 }
 
 //testing
console.log(gymMembershipCost(100, 0));
console.log(gymMembershipCost(100, 1));
console.log(gymMembershipCost(100, 2));
console.log(gymMembershipCost(100, 3));
console.log(gymMembershipCost(100, 4)); 
 
 export {gymMembershipCost}