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
document.getElementById('entry').value = newValss
}
function mathButPress(operator) {

}
function equalButPress() {

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