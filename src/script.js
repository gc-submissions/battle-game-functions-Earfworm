"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);
}

// console.log(randomDamage());
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    if (randNum === 0) {
        return opt1;
    } else {
        return opt2;
  }
}

const attackPlayer = function (health) {
    const remainder = health - randomDamage();
    return remainder;
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health <= 0) {
        return true;
    } else {
        return false;
}
}

function fight(player1, player2, player1Health, player2Health) {
   
    while (true) {
         const attacker = chooseOption(player1, player2)
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            } 
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }

       
  
    }
}
fight("Deshawn", "Angie", 100, 100);

//   extended challenges

const getGrade = (grade) => {
    if (grade >= 90) {
        return "A"; 
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else if (grade <= 40) {
        return "F";
    } else {
        return "Please enter a number 0 through 100";
    }
}

console.log(getGrade(80));
console.log(getGrade(100));
console.log(getGrade(70));
console.log(getGrade(65));
console.log(getGrade(30));
console.log(getGrade("extra credit"));
