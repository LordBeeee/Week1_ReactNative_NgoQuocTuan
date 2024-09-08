// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
var Dolphins = [96,108,89]
var Koalas = [88,91,110]
const tinhTB = (x) =>{
    let sum = 0;
    for(let i = 0; i <x.length;i++){
        sum += x[i]
    }
    return sum/x.length
}
TB_Dolphins = tinhTB(Dolphins)
TB_Koalas = tinhTB(Koalas)
console.log(TB_Dolphins)
console.log(TB_Koalas)
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if(TB_Dolphins>TB_Koalas) {
    console.log("Dolphins thắng")
} else if(TB_Dolphins<TB_Koalas) {
    console.log("Koalas thắng")
} else {
    console.log("Hai bên hòa")
}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
const tinhDiem = (x) => {
    for(let i = 0; i <x.length;i++){
        if(x[i]>=100)
            return true
    }
    return false
}
diem_Dolphins = tinhDiem(Dolphins)
diem_Koalas = tinhDiem(Koalas)
if(TB_Dolphins>TB_Koalas && diem_Dolphins === true) {
    console.log("Dolphins thắng")
} else if(TB_Dolphins<TB_Koalas && diem_Koalas===true) {
    console.log("Koalas thắng")
} else {
    console.log("Hai bên hòa")
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
if(TB_Dolphins>TB_Koalas && diem_Dolphins === true) {
    console.log("Dolphins thắng")
} else if(TB_Dolphins<TB_Koalas && diem_Koalas===true) {
    console.log("Koalas thắng")
} else if(diem_Dolphins === false && diem_Koalas===false) {
    console.log("Khong7 đội nào được cúp")
}else {
    console.log("Hai bên hòa")
}
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110


