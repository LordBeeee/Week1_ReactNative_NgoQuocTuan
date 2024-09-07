// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables
var heightMark = 1.69
var heightJohn = 1.95
var massMark = 78
var massJohn = 92


// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)


BMI_Mark = massMark / (heightMark*heightMark)
console.log(BMI_Mark)
BMI_John = massJohn / (heightJohn*heightJohn)
console.log(BMI_John)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

var markHigherBMI 

if(markHigherBMI = true) {
    console.log(`Mark's BMI (${BMI_Mark.toFixed(2)}) is higher than John's (${BMI_John.toFixed(2)})!`)
} else {
    console.log(`John's BMI (${BMI_John.toFixed(2)}) is higher than Mark's (${BMI_Mark.toFixed(2)})!`)
}
