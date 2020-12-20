/// <reference path="utility-functions.ts" />

const result = Utility.Fees.calculateLateFee(4);
console.log(result);
const result2 = Utility.maxBooksAllowed(30);
console.log(result2);

import util = Utility.Fees;
console.log(util.calculateLateFee(10));