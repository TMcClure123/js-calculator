let preVal = ''
let newVal = ''
let resultVal= ''
let mathOperator= ''
// store wether or not decimal was clicked
// (only allow one decimal per Val)
let decimalClicked =  false
// hold values we want stored in memory
let valMemStored = ''

function numButPress(num) {
    // check if a number has already been put
    if(resultVal) {
        // start a new number
        newVal = num
        // reset to create a new result
        resultVal = ''
    } else {
        if (num === '.'){
            if (decimalClicked != true) {
                newVal += num
                // sets decimal check var to true, wont allow more
                decimalClicked = true
            }
        } else{
            newVal += num
            console.log(newVal)
        }
        
    }
document.getElementById('entry').value = newVal
}
function mathButPress(operator) {
 // Check if there was a previous calculation 
 // by seeing if resultVal has a value
 // If result doesn't have a value then store
 // the current value as a previous for the next calculation 
    if(!resultVal){
    preVal = newVal
} else {
preVal = resultVal
    }
    newVal = ''
    decimalClicked = false
    mathOperator = operator
    resultVal = ''
    document.getElementById('entry').value=''
}

function equalButPress() {
 decimalClicked = false

 preVal = parseFloat(preVal)
 newVal = parseFloat(newVal)

 //preform calculations
 switch(mathOperator){
    case '+':
        resultVal = preVal + newVal
        break
    case '-':
        resultVal = preVal - newVal 
        break
    case '*':
        resultVal = preVal * newVal
        break
    case '/':
            resultVal = preVal / newVal
        break
     default:
    preVal = newVal
 }
 preVal = newVal
 document.getElementById('entry').value = resultVal

}
// clears everything except memory
function clearButPress() {
preVal = ''
newVal = ''
resultVal= ''
mathOperator= ''
decimalClicked =  false
document.getElementById('entry').value= '0'
}
// store the current value in #entry into valMemStored
function copyButPress() {
valMemStored = document.getElementById('entry').value
}
function pasteButPress() {
if (valMemStored) {
    document.getElementById('entry').value = valMemStored
    newVal = valMemStored    
}
}