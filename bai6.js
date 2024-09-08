// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
var bills = [125,555,44]
var tips =[]
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
const calcTip = (x) => {
    
    for(let i = 0 ; i < x.length;i++) {
        let tip = (x[i] >= 50 && x[i] <= 300) ? x[i]*15/100 : x[i]*20/100
        tips.push(tip)
    }
    return tips
}
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
console.log("Bills:"+calcTip(bills))
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var totals = []
const calcTotal = (a,b) => {
    for(let i = 0 ;i <a.length;i++) {
        total = a[i] +b[i]
        totals.push(total)
    }
    return totals
}
console.log("Totals:"+calcTotal(bills,tips))

// Test data: 125, 555 and 44