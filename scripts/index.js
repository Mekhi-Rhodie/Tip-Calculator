$(document).ready(function(){
    $("#calculate").on("click", function(){
        const bill = parseInt($("#bill").val())
        const party = parseInt($("#party").val())
        const tipPerc = parseInt($("#tip-percent").val())
        const tipAmount = bill * tipPerc / 100
        const tot = bill + tipAmount 
        console.log(bill)
        console.log(party)
        console.log(tipPerc)
        console.log(tipAmount)
        console.log(tot)
        $("#tip-amount")
        .empty()
        .append(tipAmount.toFixed(2))
        $("#tot")
        .empty()
        .append(tot.toFixed(2))
    })
})