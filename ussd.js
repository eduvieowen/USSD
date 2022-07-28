// Bank USSD
let nameOne = "Clement Peterson"; 
let nameTwo = "Damilola Adejoke"; 
let nameThree = "Tobechukwu Okafor"; 
let option = prompt(`
1. Buy Airtime
2. Credit Third Party
3. Buy Data
4. Transfer`);
option = Number(option);

// Buy airtime
if (option == 1) {
    var amount = prompt("Enter amount");
    // let var const
    amount = Number(amount);

    var confirming = confirm("Are you sure?");

    if (confirming == true) {
        alert(`Your N${amount} has been confirmed!`);
    }
    else {
        alert(`Reload Page`);
    }
}

// Credit 3rd party
else if (option == 2) {
    var number = prompt("Enter phone number");
    number = Number(number);

    var amount = prompt("Enter amount");
    amount = Number(amount);

    var confirming = confirm("Are you sure?");

    if (confirming == true) {
        alert(`Your N${amount} to ${number} has been confirmed!`);
    }
    else {
        alert(`Reload Page`);
    }
}

// Buy data
else if (option == 3) {
    var amount = prompt("Enter amount of data in MB");
    amount = Number(amount);

    var confirming = confirm("Are you sure?");

    if (confirming == true) {
        alert(`Your ${amount}mb has been confirmed!`);
    }
    else {
        alert(`Reload Page`);
    }
}

// Transfer
else if (option == 4) {
    let bankName = prompt(`Select receiver's bank:
    1. GTBank
    2. Access Bank
    3. Fidelity Bank
    4. Ecobank
    5. Standard Chatered Bank
    6. First Bank
    0. More`);
    bankName = Number(bankName);

    if (bankName != 0 && bankName <= 6) {
        
        let numb = prompt("Enter account number");
        numb = Number(number);

        let bankConf = prompt(`
        Transfering to ${nameTwo}? 
        1. Confirm
        2. Back
        `);
        bankConf = Number(bankConf);
        
        if (bankConf == 1) {
            let amount = prompt("Enter amount");
            amount = Number(amount);
            
            var confirming = confirm("Are you sure?");
        
            if (confirming == true) {
                alert(`Your N${amount} transfer to ${nameTwo} accont no. ${numb} has been confirmed!`);
            }
            else if (confirming == false) {
                alert(`Reload Page`);
            }
        }
        else if (bankConf === 2){
            alert(`Reload Page`);
        }

    }

    else if (bankName == 0) {

        let bankNameTwo = prompt(`
        7. Zenith Bank
        8. UBA
        0. Back
        `);
        bankNameTwo = Number(bankNameTwo);

        if (bankNameTwo == 7 || bankNameTwo == 8) {
        
            let numb = prompt("Enter account number:");
            numb = Number(number);

            var bankConf = prompt(`
            Transfering to ${nameThree}? 
            1. Confirm
            2. Back
            `);
            if (bankConf == 1) {
                var amount = prompt("Enter amount:");
                amount = Number(amount);
                
                var confirming = confirm(`Are you sure you want to send N${numb} to ${nameThree}?`);
            
                if (confirming == true) {
                    alert(`Your N${amount} tarnsfer to ${nameThree} account no. ${numb} has been confirmed!`);
                }
                else {
                    alert(`Reload Page`);
                }
            }
            else if (bankConf == 2) {
                alert(`Reload Page`);
            }
        }
        else if (bankNameTwo == 0) {
            alert(`Reload Page`)
        }
    }
    
    else {
        alert(`Invalid Input, reload page!`)
    }
}