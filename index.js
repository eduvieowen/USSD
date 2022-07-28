// Bank USSD
let nameOne = "Clement Peterson"; 
let nameTwo = "Damilola Adejoke"; 
let nameThree = "Tobechukwu Okafor"; 

let ussd = prompt(`Enter Standard Chatered USSD

0. Help

*Customer care: 0800 123 5000 or +234 1 270 4611-4`);
ussd = String(ussd);
// Start USSD
switch (ussd) {
    case "0":
        alert("Standard Chatered USSD Code: *977#\nDefault 6 digit pin: 00000");
        document.location.reload(true);
        break;
    case "*977#":
        let options = prompt("Welcome to Standard Chatered Bank\n\n1. Transfer\n2. Airtime top-up\n3. Buy data\n4. Check account balance");
        options = Number(options);

        switch (options) {
            // Transfer 1
            case 1:{
                let transfer = prompt(`TRANSFER\n\n1. Own account\n2. SCB\n3. Other banks`);
                transfer = Number(transfer);
                
                switch (transfer) {
                    // Self
                    case 1:{
                        // Amount
                        let amount = prompt(`Enter amount:`)
                        amount = Number(amount);
                        
                        if (typeof amount == "number") {
                            let pin = prompt(`Enter 6 digit pin:`)
                                pin = Number(pin);
                                let pinDefault = 000000;

                                //Pin
                                switch (pin) {
                                    case pinDefault:

                                        let conf = prompt(`You are about to send N${amount} to yourself. Click "OK" to confirm.\n1. Confirm\n2. Cancel`);
                                        // Confirm
                                        switch (conf) {
                                            case "1":
                                                
                                                alert(`You have successfully sent N${amount} to yourself.`);
                                                document.location.reload(true);
                                                break;
                                        
                                            case "2":
                                                alert(`Transaction cancelled.\nRedirecting to homepage...`);
                                                document.location.reload(true);
                                                break;
                                        }
                                        break;
                                
                                    default:
                                        alert(`WRONG PIN.\nTry again...`);
                                        document.location.reload(true);
                                        break;
                                }
                        } 
                        else {
                            alert(`Invalid Amount.\nTry again...`)
                        }
                        break;
                    } // end of case 1.1
                    // SCB Account

                    case 2:{
                        let accountNumb = prompt(`Enter SCB account number:`)
                        accountNumb = Number(accountNumb);

                        // Confirm account no.
                        if (typeof accountNumb == "number") {
                            
                            let conf = prompt(`Account number ${accountNumb} belongs to Eduvie Owen.\n1. Confirm\n2. Cancel.`);
                                
                            // Amount
                            switch (conf) {
                                case "1":
                                    let amount = prompt(`Enter amount:`)
                                    amount = Number(amount);
                                    
                                    // Pin
                                    if (typeof amount == "number") {
                                        let pin = prompt(`Enter 6 digit pin:`);
                                        pin = Number(pin);
                                        let pinDefault = 000000;

                                        switch (pin) {
                                            case pinDefault:
                                                let conf = prompt(`You are about to send N${amount} to Eduvie Owen. Click "OK" to confirm.`);

                                                // Confirm
                                                switch (conf) {
                                                    case conf == true:
                                                        alert(`You have successfully sent N${amount} to Eduvie Owen.`);
                                                        document.location.reload(true);
                                                        break;
                                                
                                                    default:
                                                        alert(`Transaction cancelled. Redirecting to homepage.`);
                                                        document.location.reload(true);
                                                        break;
                                                }
                                                break;
                                        
                                            default:
                                                alert(`WRONG PIN.\nRedirecting to homepage...`);
                                                document.location.reload(true);
                                                break;
                                        }
                                    } 
                                    else {
                                        alert(`Invalid Amount`)
                                    }
                                    break;
                            
                                case "2":
                                    alert(`You cancelled confirmation.\n Redirecting to homepage...`);
                                    document.location.reload(true);
                                    break;
                            }
                        } 
                        else {
                            alert(`Invalid Account Number`);
                            document.location.reload(true);
                        }
                        break;
                    } // end of case 1.2

                    // Other Banks 1.3
                    case 3:{
                        let accountNumb = prompt(`Enter beneficiary bank account number:
                        `)
                        
                        accountNumb = Number(accountNumb);

                        // Confirm account no.
                        if (typeof accountNumb == "number") {
                            let banks = prompt(`Select bank:\n\n1. Access Bank Plc\n2. Citibank Nigeria Limited\n3. Ecobank Nigeria\n4. Fidelity Bank Plc\n5. First Bank of Nigeria Limited\n6. First City Monument Bank Limited (FCMB)\n7. Guaranty Trust Holding Company Plc (GTBank)\n8. Heritage Bank Plc\n9. Jaiz Bank Plc\n10. Keystone Bank Limited\n11. Kuda Bank\n12. Polaris Bank Limited\n13. Stanbic IBTC Bank Plc\n14. Standard Chartered\n15. Sterling Bank Plc\n16. TAJBank Limited\n17. Titan Trust Bank Limited\n18. Union Bank of Nigeria Plc\n19. United Bank for Africa Plc (UBA)\n20. Unity Bank Plc\n21. Wema Bank Plc\n22. Zenith Bank Plc`)

                            if (banks != 0 && banks <= 22) {
                                
                                let conf = prompt(`Account number ${accountNumb} belongs to Eduvie Owen.\n1. Confirm\n2. Cancel`);
                                
                                // Amount
                                switch (conf) {
                                    case "1":
                                        let amount = prompt(`Enter amount:`)
                                        amount = Number(amount);
                                        
                                        // Pin
                                        if (typeof amount == "number") {
                                            let pin = prompt(`Enter 6 digit pin:`);
                                            pin = Number(pin);
                                            let pinDefault = 000000;

                                            switch (pin) {
                                                case pinDefault:
                                                    let conf = prompt(`You about to send N${amount} to Eduvie Owen acc. no. ${accountNumb}. Click "OK" to confirm.`);

                                                    // Confirm
                                                    switch (conf) {
                                                        case conf == true:
                                                            alert(`You have successfully sent N${amount} to Eduvie Owen acc no. ${accountNumb}.`);
                                                            document.location.reload(true);
                                                            break;
                                                    
                                                        default:
                                                            alert(`Transaction cancelled.\n Redirecting to homepage...`);
                                                            document.location.reload(true);
                                                            break;
                                                    }
                                                    break;
                                            
                                                default:
                                                    alert(`You cancelled. confirmation.\n Redirecting to homepage...`);
                                                    document.location.reload(true);
                                                    break;
                                            }
                                        } 
                                        else {
                                            alert(`Invalid Amount`);
                                            document.location.reload(true);
                                        }
                                        break; // end of pin
                                
                                    case "2":
                                        alert(`You cancelled confirmation.\n Redirecting to homepage...`)
                                        document.location.reload(true);
                                        break;
                                } // end of amount
                            } 
                            else {
                                alert(`Invalid Selection`);
                                document.location.reload(true);
                            } // end of bank selection
                            
                        } 
                        else {
                            alert(`Invalid Account Number`);
                            document.location.reload(true);
                        }
                        break; // end of confirm  account no.
                    } // end of case other banks 1.3
                    
                    default:
                        alert(`Invalid Selection.\nRedirecting to homepage...`);
                        document.location.reload(true);
                        break;
                    }
                break;
            } // end of transfer 1
            
            // Airtime top-up
            case 2:{
                let topUp = prompt(`AIRTIME TOP-UP\n\n1. Self\n2. Third-party`)
                topUp = Number(topUp);

                switch (topUp) {
                        //Self
                        case 1:{
                            // Amount
                            let amount = prompt(`Enter top-up amount:`)
                            amount = Number(amount);
                            
                            if (typeof amount == "number") {
                                let pin = prompt(`Enter 6 digit pin:`)
                                    pin = Number(pin);
                                    let pinDefault = 000000;
                                    //Pin
                                    switch (pin) {
                                        case pinDefault:
    
                                            let conf = prompt(`You are about to top-up N${amount} to yourself.\n1. Confirm\n2. Cancel`);
                                            
                                            // Confirm
                                            switch (conf) {
                                                case "1":
                                                    alert(`You have successfully topped-up your line with N${amount}.`);
                                                    document.location.reload(true);
                                                    break;
                                            
                                                case "2":
                                                    alert(`Transaction cancelled.\n Redirecting to homepage...`);
                                                    document.location.reload(true);
                                                    break;
                                            }
                                            break;
                                    
                                        default:
                                            alert(`Wrong pin.\nTry again...`);
                                            document.location.reload(true);
                                            break;
                                    }
                            } 
                            else {
                                alert(`Invalid Amount.\nTry again...`);
                            }
                            break;
                        } // end of case 2.1

                        //Third-party
                        case 2:{
                            //Phone no.
                            let thirdParty = (`Enter beneficiary phone number:`);
                            thirdParty = Number(thirdParty);

                            // Amount
                            if (typeof thirdParty == "number") {
                                let amount = prompt(`Enter top-up amount:`)
                                amount = Number(amount);
                                
                                if (typeof amount == "number") {
                                    let pin = prompt(`Enter 6 digit pin:`)
                                        pin = Number(pin);
                                        let pinDefault = 000000;
                                        //Pin
                                        switch (pin) {
                                            case pinDefault:
        
                                                let conf = prompt(`You are about to top-up N${amount} to ${thirdParty}.\n1. Confirm\n2. Cancel`);
                                                // Confirm
                                                switch (conf) {
                                                    case "1":
                                                        
                                                        alert(`You have successfully topped-up ${thirdParty} with N${amount}.`);
                                                        document.location.reload(true);
                                                        break;
                                                
                                                    case "2":
                                                        alert(`Transaction cancelled.\n Redirecting to homepage...`);
                                                        document.location.reload(true);
                                                        break;
                                                }
                                                break;
                                        
                                            default:
                                                alert(`Wrong pin.\nTry again...`);
                                                document.location.reload(true);
                                                break;
                                        }
                                } 
                                else {
                                    alert(`Invalid Amount.\nTry again...`)
                                }
                                break;
                            } 
                            else {
                                alert(`Invalid Number.\nRedirecting to homepage...`);
                                document.location.reload(true);
                            }
                        } // end of case 2.2
                    }
                break;
            }

            // Buy data
            case 3:{
                alert(`Not yet available`);
                document.location.reload(true);
                break;
            }

            // Check account balance
            case 4:{
                let pin = prompt(`Enter 6 digit pin:`);
                pin = Number(pin);
                if (pin == 000000) {
                    alert(`BALANCES\n\nYour balance on account 05XXXXXXXXX is: NGN250,000`);
                } else {
                    alert(`Wrong pin.\nTry again...`);
                    document.location.reload(true);
                }
                break;
            } // end of case 4

            default:
                alert(`Invalid Selection.\nRedirecting to homepage...`);
                document.location.reload(true);
                break; // end of options selection
        }

        break; // end of case " *977# "

    default:
        alert(`Invalid USSD.\nVisit "Help" menu.`);
        document.location.reload(true);
        break;
}

