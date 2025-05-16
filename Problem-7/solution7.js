// Input from user
let inputNumber=Number(prompt('Enter Number:'));

// Define function
function choiceFunc(num){
    // Conditional Statement
    if((num % 3 == 0) & (num % 5 == 0)) {
        console.log('FizzBuzz');
    }else if (num % 3 == 0){
        console.log('Fizz');        
    }else if (num % 5 == 0){
        console.log('Buzz');
    }else{
        console.log('Not a Fizz-Buzz number');
    }
}

// Function Call
choiceFunc(inputNumber);