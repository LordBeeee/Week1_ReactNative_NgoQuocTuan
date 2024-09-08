// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

var Dolphins_1=[44,23,71]
var Koalas_1=[65,54,49]
var Dolphins_2=[85,54,41]
var Koalas_2=[23,34,27]
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (x) =>{
    let sum =0
    for(let i =0;i<x.length;i++) {
        sum+=x[i]
    }
    return sum/x.length
}

// 2. Use the function to calculate the average for both teams
var Ave_Dolphins_1 =calcAverage(Dolphins_1)
var Ave_Koalas_1 =calcAverage(Koalas_1)
var Ave_Dolphins_2 =calcAverage(Dolphins_2)
var Ave_Koalas_2 =calcAverage(Koalas_2)
console.log(Ave_Dolphins_1)
console.log(Ave_Koalas_1)
console.log(Ave_Dolphins_2)
console.log(Ave_Koalas_2)
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (a,b) => {
    if(a>b && a>=b*2) {
        console.log(`Dolphins win (${a} vs. ${b})`)
    } else if(a<b && b>=a*2) {
        console.log(`Koalas win (${b} vs. ${a})`)
    } else if (a==b) {
        console.log("Hoa")
    } else {
        console.log("khong co cup")
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
checkWinner(Ave_Dolphins_1,Ave_Koalas_1)
checkWinner(Ave_Dolphins_2,Ave_Koalas_2)
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �