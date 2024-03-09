
function display(num) {
    const output = document.getElementById("output")
    output.value += num ;
}
function clearbtn() {
    const output = document.getElementById("output")
    output.value = "" ;
}
function del() {
    const output = document.getElementById("output")
    output.value=output.value.slice(0,-1) ;
}
function calculate() {
    const output = document.getElementById("output")
    // output.value=eval(output.value) ;

    try {
        output.value=eval(output.value)
    } catch (error) {
        alert("Invalid")
    }

    if (output.value=== "undefined") {
        alert("Please enter something to calculate ")
        output.value = "" ;
    }
    // else if (condition) {
        
    // }
}