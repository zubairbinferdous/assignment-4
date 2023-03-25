
// Problem 1: Let’s play a mind game

function mindGame(number){
    if (typeof number === 'number') {
        let multiplication =  number * 3;
        let addition = multiplication + 10 ;
        let division = addition / 2 ;
        let sum = division - 5;
        return sum;  
    }else{
        return 'plz inter a number';
    }
}
const data = 5;
const result = mindGame(data);
console.log(result);


// Problem 2: Finding even or odd

function evenOdd(string){
    let stringValue = string.length;
    if(stringValue % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
}

const string = 'Batch7';
const evenOrOdd = evenOdd(string);
console.log(evenOrOdd);


// Problem 3: Is Less or Greater than seven 

function isLGSeven(number){
   let newValue = number - 7 ;
   if (newValue < 7 ) {
      return newValue;
   }else if( newValue >= 7){
      return number * 2; 
   }
}
let value = 15;
console.log(isLGSeven(value));


// Problem 4: Finding Bad data 

function findingBadData(badData){
    let goodData = [];
    for (let i = 0; i < badData.length; i++) {
        const element = badData[i];
        if ( 0 > element) {
            goodData.push(element);
        }
    }
    return goodData.length;
}
let badData = [ -10 , -15 , 17 , -55 , -9];
console.log(findingBadData(badData));

// Problem 5: Convert your gems into diamond

function gemsToDiamond(numOne , numTwo , numThree){
    let numberOne = numOne * 21 ;
    let numberTwo = numTwo * 32 ;
    let numberThree = numThree * 43;
    let total = numberOne + numberTwo + numberThree;
    const giveValue = 1000 * 2 ;
    if (total < giveValue) {
        return total;
    }else if(total >= giveValue){
        return total - 2000;
    }
}

let gems= gemsToDiamond(20 , 200 , 50,);
console.log(gems);
