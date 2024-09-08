// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
var bills = [275,40,430]
// let tips = []
// const tinhTip =(x) =>{
//     for(let i = 0; i < x.length; i++) {
        
//         let tip = (x[i] >= 50 && x[i] <= 300) ? x[i]*15/100 : x[i]*20/100
//         tips.push(tip)
//     }
//     return tips
// }
// tips = tinhTip(bills)
// console.log(tips)
// console.log(`The bill was ${bills[i]}, the tip was ${tip}, and the total value ${bills[i]+tip}`)

for(let i = 0; i < bills.length; i++) {
    let tip = (bills[i] >= 50 && bills[i] <= 300) ? bills[i]*15/100 : bills[i]*20/100
    console.log(`The bill was ${bills[i]}, the tip was ${tip}, and the total value ${bills[i]+tip}`)
}

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”


// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �