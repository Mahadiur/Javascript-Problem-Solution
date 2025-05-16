// Input from User
let userInput=Number(prompt('Enter 1 to 9 any number:'));

// Computer Genarate Number
function compGenarate(){
    return Math.floor(Math.random()*10);
}

// Guess Game logic
function game(comp,user){
    if (user < comp){
        console.log(`your guess is almost there.\nYour number ${user}.\nComputer number ${comp}`);
    }else if (user > comp){
        console.log(`your guess is higher.\nYour number ${user}.\nComputer number ${comp}`);
    }else if (user == comp){
        console.log(`Your Guess Is Correct!.\nYour number ${user}.\nComputer number ${comp}`);
    }
}

// Function call
game(compGenarate(),userInput);