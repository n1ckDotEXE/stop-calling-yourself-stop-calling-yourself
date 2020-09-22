let stringThing1 = 'Nick';
let stringThing2 = 'Mouse'
let numThing1 = 10;
let numThing2 = 20;
let numThing3 = 30;

// add three question marks to the string

function triQuestionAdder(param1) {
    return param1 + '???';
}
triQuestionAdder(stringThing1);

// add two strings with a space in the middle

function stringCombinerThingyWithSpaceBonus(param1, param2) {
    return param1 + ' ' + param2;
}
stringCombinerThingyWithSpaceBonus(stringThing1, stringThing2);

// subtract three numbers

function subtractionFunctionThatSubtractsThreeNumbers(param1, param2, param3) {
    return param1 - param2 - param3;
}
subtractionFunctionThatSubtractsThreeNumbers(numThing1, numThing2, numThing3);

// subtract three numbers in reverse order

function subtractionFunctionThatSubtractsThreeNumbersButBackwardsThough (param1, param2, param3) {
    return param3 - param2 - param1;
}
subtractionFunctionThatSubtractsThreeNumbersButBackwardsThough(numThing1, numThing2, numThing3);

// triple a string

function stringTripler(param1) {
    return param1 + param1 + param1;
}
stringTripler(stringThing1);

// return the square root of a number (you'll probably need research!)

function doSquareRootAfterResearch(param1) {
    return Math.sqrt(param1);
}
doSquareRootAfterResearch(numThing1);