// 1. Store Mark's and John's mass and height in variables
var heightMark = 1.70
var heightJohn = 1.75
var massMark = 59
var massJohn = 65
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)


BMI_Mark = massMark / (heightMark*heightMark)
console.log(BMI_Mark)
BMI_John = massJohn / (heightJohn*heightJohn)
console.log(BMI_John)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

var markHigherBMI 

if(BMI_Mark> BMI_John) {
    markHigherBMI = true 
} else {
    markHigherBMI = false
}

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if(markHigherBMI = true) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if(markHigherBMI = true) {
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})!`)
} else {
    console.log(`John's BMI (${BMI_John}) is higher than Mark's (${BMI_Mark})!`)
}