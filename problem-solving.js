

/* This function do multiplication, addition, subtraction 
and division. That will be return a number */
function mindGame(number) {

    const type = typeof number;
    if (type === 'undefined' || type === 'string' || type === 'boolean' 
    || type === 'function' || type === 'object' ||
    type === 'symbol' || type === 'bigint') {

        return 'please input a Number'
    }
    else {
        let multiSum = number * 3 + 10;
        return multiSum / 2 - 5;
    }
}


/*This function is to check the 
characters of a text are odd or even*/
function evenOdd(text) {

    let textLength = text.length;
    const type = typeof text;

    if (type === 'undefined' || type === 'number' || type === 'boolean'
     || type === 'function' || type === 'object' || type === 'symbol'
    || type === 'bigint') {

        return 'please input Text';
    }
    else if (textLength % 2 !== 1) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
// console.log(evenOdd(true));



/*This function do if number is greater than 7 that will be make 
double input and less than 7 it will be return result*/
function isLGSeven(number) {
    let subtraction = number - 7;
    const type = typeof number;

    if (type === 'undefined' || type === 'string' || type === 'boolean' 
    || type === 'function' || type === 'object' || type === 'symbol' 
    || type === 'bigint') {

        return 'please input a Number';
    }
    else if (subtraction >= 7) {
        return number * 2;
    }

    return subtraction;
}
// console.log(isLGSeven(13))


 /*This function finding how many 
 negative Number in an array*/

function findingBadData(numbers) {

    const type = typeof numbers;

    if (type === 'undefined' || type ==='string' 
    || type === 'boolean' || type === 'function' 
    || type === 'symbol' || type === 'bigint' 
    || type === 'number') {
        return 'please input an array of number';
    }

    let badData = 0;
    for (let number of numbers) {
        if (number < 0) {
            badData++;
        }
    }
    return badData;
}

// console.log(findingBadData([ 2, -5, -7, -13  ]))


// problem 5 

function gemsToDiamond(friend1, friend2, friend3) {
    // console.log(friend1, friend2, friend3)

    let typeFriend1 = typeof friend1,
        typeFriend2 = typeof friend2,
        typeFriend3 = typeof friend3;

    if (typeFriend1 === 'undefined' || typeFriend2 === 'undefined' 
    || typeFriend3 === 'undefined' || typeFriend1 === 'string' 
    || typeFriend2 === 'string' || typeFriend3 === 'string') {

        return 'please 3 input of number';
    }

    let friend1Gems = friend1 * 21,
        friend2Gems = friend2 * 32,
        friend3Gems = friend3 * 43;

    let totalGems = friend1Gems + friend2Gems + friend3Gems;

    if (totalGems >= 1000 * 2) {
        return totalGems - 1000 * 2;
    }
    return totalGems;

}
console.log(gemsToDiamond( 1, 1, ))
