// first class ticket 
function firstClassTicket(valueIncrease){
    const firstClassCounter = document.getElementById('firstClassCounter');
    const firstClassNumber = parseInt(firstClassCounter.value);
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
// economy ticket 
function economyTicket(valueIncrease){
    const economyCounter = document.getElementById('economyCounter');
    const economyNumber = parseInt(economyCounter.value);
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
    totalAmount();
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
    return grandTotal;
}
// book now button 
document.getElementById('bookNow').addEventListener('click', function(){
    const disappear = document.getElementById('disappear');
    disappear.style.display = 'none';
    const bookedArea = document.getElementById('bookedArea');
    bookedArea.style.display = 'block';
})
document.getElementById('homeBtn').addEventListener('click', function(){
    const disappear = document.getElementById('disappear');
    disappear.style.display = 'block';
    const bookedArea = document.getElementById('bookedArea');
    bookedArea.style.display = 'none';
})