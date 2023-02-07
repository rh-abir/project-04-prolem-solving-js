

/* This function do multiplication, addition, subtraction 
and division. That will be return a number */
function mindGame(number) {

    const type = typeof number;

    if (type !== 'number') {

        return 'please input a Number';
    }
    else {
        let multiSum = number * 3 + 10;
        return multiSum / 2 - 5;
    }
}


/*This function is to check the 
characters of a text are odd or even*/
function evenOdd(texts) {

    const type = typeof texts;

    if (type !== 'string') {
        return 'please input Text';
    }
    else if (texts.length % 2 !== 1) {
        return 'even';
    }
    
    return 'odd';
}


/*This function do if number is greater than 7 that will be make 
double input number and less than 7 it will be return result*/
function isLGSeven(number) {

    let subtraction = number - 7;
    const type = typeof number;

    if (type !== 'number') {

        return 'please input a Number';
    }
    else if (subtraction >= 7) {
        return number * 2;
    }

    return subtraction;
}


 /*This function finding how many 
 negative Number in an array*/
function findingBadData(numbers) {

    const type = Array.isArray(numbers);
    if (type !== true) {
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


/*This function will sum all parameter number and if parameter is over 2000, then subtraction total value by 2000 */
function gemsToDiamond(friend1, friend2, friend3) {

    let friendGems1 = friend1 * 21,
        friendGems2 = friend2 * 32,
        friendGems3 = friend3 * 43;

    let totalGems = friendGems1 + friendGems2 + friendGems3;

    let typeFriend1 = typeof friend1,
        typeFriend2 = typeof friend2,
        typeFriend3 = typeof friend3;

    if (typeFriend1, typeFriend2, typeFriend3 !== 'number') {

        return 'please 3 input of number';
    }

    if (totalGems >= 1000 * 2) {
        return totalGems - 1000 * 2;
    }
    return totalGems;
}
