// problem 1


function mindGame(number){
    /* This function do multiplication, addition subtraction and division. That will be return a number */
    
    const type = typeof number;
    if(type === 'undefined' || type === 'string' || type === 'boolean' || type === 'function' || type === 'object' || type === 'symbol' || type === 'bigint'){
        return 'please input Number'
    }
    let multiSum = number * 3 + 10;
    return multiSum / 2 - 5;
}
// console.log(mindGame(33));


// problem 2 

function evenOdd(text){
    /*This function is to check the characters of a text are odd or even*/
    
    let textLength = text.length;
    let type = typeof text;

    if(type === 'undefined' || type === 'number' || type === 'boolean' || type === 'function' || type === 'object' || type === 'symbol' || type === 'bigint'){ 
        return 'please input Text';
    }
    else if(textLength % 2 !== 1){
        return 'even';
    }
    else{
        return 'odd';
    }
}
// console.log(evenOdd(12));

// problem 3 

function isLGSeven(number){
    /*This function is to check the Number is getter*/
    let subtraction  = number - 7;
    let type = typeof number;

    if(type === 'undefined' || type === 'string' || type === 'boolean' || type === 'function' || type === 'object' || type === 'symbol' || type === 'bigint'){ 
        return 'please input Number';
    }
   else if(number >= 7){
        return number * 2;
    }
    return subtraction;
}
console.log(isLGSeven(10))


// problem 4 

function findingBadData(numbers){
    let badData = 0;
    for(let number of numbers){
        // console.log(number)
        if(number < 0){
            badData++;
        }
    }
    return badData;
}

// console.log(findingBadData([1,2,5]))


// problem 5 

function gemsToDiamond(friend1, friend2, friend3){
    // console.log(friend1, friend2, friend3)
    let friend1Gems = friend1 * 21,
        friend2Gems = friend2 * 32,
        friend3Gems = friend3 * 43;

    let totalGems = friend1Gems + friend2Gems + friend3Gems; 

    if(totalGems >= 1000 * 2){
        return totalGems - 1000 * 2;
    }
    return totalGems;

}
// console.log(gemsToDiamond(100, 5, 1))
