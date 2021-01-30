// document.getElementById('firstClassIncrease').addEventListener('click', function(){
//     firstClassTicket(true);
// })
// document.getElementById('firstClassDecrease').addEventListener('click', function(){
//     firstClassTicket(false);
// })
function firstClassTicket(valueIncrease){
    const firstClassCounter = document.getElementById('firstClassCounter');
    const firstClassNumber = parseInt(firstClassCounter.value);
    // const firstClassNewNumber = firstClassNumber - 1;
    let firstClassNewNumber = firstClassNumber;
    if(valueIncrease == true){
        firstClassNewNumber = firstClassNumber + 1;
    }
    if(valueIncrease == false && firstClassNumber > 0){
        firstClassNewNumber = firstClassNumber - 1;
    }
    firstClassCounter.value = firstClassNewNumber;
    const firstClassTotal = firstClassNewNumber * 150;
    document.getElementById('firstClassTotal').innerText = firstClassTotal;
    totalAmount();
}
// first class
// document.getElementById('firstClassIncrease').addEventListener('click', function(){
//     const firstClassCounter = document.getElementById('firstClassCounter');
//     const firstClassNumber = parseInt(firstClassCounter.value);
//     const firstClassNewNumber = firstClassNumber + 1;
//     firstClassCounter.value = firstClassNewNumber;
//     const firstClassTotal = firstClassNewNumber * 150;
//     document.getElementById('firstClassTotal').innerText = firstClassTotal;
//     totalAmount();
// })
// document.getElementById('firstClassDecrease').addEventListener('click', function(){
//     const firstClassCounter = document.getElementById('firstClassCounter');
//     const firstClassNumber = parseInt(firstClassCounter.value);
//     const firstClassNewNumber = firstClassNumber - 1;
//     firstClassCounter.value = firstClassNewNumber;
//     const firstClassTotal = firstClassNewNumber * 150;
//     document.getElementById('firstClassTotal').innerText = firstClassTotal;
//     totalAmount();
// })
// economy class
// document.getElementById('economyIncrease').addEventListener('click', function(){
//     economyTicket(true);
// })
// document.getElementById('economyDecrease').addEventListener('click', function(){
//     economyTicket(false);
// })
function economyTicket(valueIncrease){
    const economyCounter = document.getElementById('economyCounter');
    const economyNumber = parseInt(economyCounter.value);
    // const economyNewNumber = economyNumber - 1;
    let economyNewNumber = economyNumber;
    if(valueIncrease == true){
        economyNewNumber = economyNumber + 1;
    }
    if(valueIncrease == false && economyNumber > 0){
        economyNewNumber = economyNumber - 1;
    }
    economyCounter.value = economyNewNumber;
    const economyTotal = economyNewNumber * 100;
    document.getElementById('economyTotal').innerText = economyTotal;
    totalAmount()
}
// total amount
function totalAmount(){
    const firstClassCounter = document.getElementById('firstClassCounter');
    const firstClassNumber = parseInt(firstClassCounter.value);

    const economyCounter = document.getElementById('economyCounter');
    const economyNumber = parseInt(economyCounter.value);
    
    const subtotal = firstClassNumber * 150 + economyNumber * 100;
    document.getElementById('subtotal').innerText = subtotal;

    const vat = Math.round (subtotal * 0.1);
    document.getElementById('totalVat').innerText = vat;

    const grandTotal = subtotal + vat;
    document.getElementById('grandTotal').innerText = grandTotal;
}
// function totalAmountValue(ticket){
//     const ticketInput = document.getElementById('economyCounter');
//     const ticketCount = parseInt(economyCounter.value);
// }