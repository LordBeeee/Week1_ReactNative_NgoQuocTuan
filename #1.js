// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// 1. Store Mark's and John's mass and height in variables
var heightMark = 170
var heightJohn = 175
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
    console.log(markHigherBMI = true )
} else {
    console.log(markHigherBMI = false)
}
