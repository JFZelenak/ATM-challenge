let maxNumber = 10000;
const billNameAndCount = [[100,50,20,10],[999,3,1,999]];

function atmShowAll() {
    alert(`the maximum withdrawel amount is ${maxNumber}€. There are ${billNameAndCount[1][0]} x ${billNameAndCount[0][0]} bills, ${billNameAndCount[1][1]} x ${billNameAndCount[0][1]} bills, ${billNameAndCount[1][2]} x ${billNameAndCount[0][2]} bills, ${billNameAndCount[1][3]} x ${billNameAndCount[0][3]} bills.`);
}

function atmMaintenance() {
    atmShowAll();
    maxNumber = prompt("Input new maximum withdrawel amount: ");
    billNameAndCount[1][0] = prompt(`Input new number of bills of ${billNameAndCount[0][0]}s available: `);

}

function atmUserWithdrawel() {
    let given = 0;
    let validAmount = false;
    let withdrawelNr = 0;
    let requiredBills = 0;

    atmShowAll();

    // prompt and check withdrawel amount
    while (!validAmount) {
        withdrawelNr = prompt(`Please input withdrawel amount (from 10 to ${maxNumber} and divisible by 10) in €: `);

        alert("you want to withdraw " + withdrawelNr + " €.");

        if (withdrawelNr % 10 === 0) {
            if (withdrawelNr >= 10 && withdrawelNr <= maxNumber) {
                validAmount = true;
            } else {
                alert("Invalid amount! Amount not in range! Please input valid amount.");

                validAmount = false;
            }
        } else {
            alert("Invalid amount! Amount % 10 != 0! Please input valid amount.");
            validAmount = false;
        }
    }

    for (let j = 0; j < 4; j++) {
        if (withdrawelNr !== 0) {
            alert(`for the ${billNameAndCount[0][j]}s: `);

            // check if withdrawel amount is bigger or equal to latest bill kind
            if (withdrawelNr >= billNameAndCount[0][j]) {

                // check how many bills of the latest bill kind are required for the withdrawel amount
                requiredBills = Math.floor(withdrawelNr / billNameAndCount[0][j]);
                alert(`${requiredBills} x ${billNameAndCount[0][j]} are required.`);

                // check number of bills of the latest bill kind
                if (billNameAndCount[1][j] === 0) {
                    alert(`There are no ${billNameAndCount[0][j]} € bills available.`)
                    continue;
                } else if (billNameAndCount[1][j] >= requiredBills) {
                    alert(`Enough ${billNameAndCount[0][j]} € bills available.`);
                    given = given + (requiredBills * billNameAndCount[0][j]);
                    alert(`you have been given ${given} € in loop ` + (j+1) + `.`);
                    // check if in last loop
                    if (j === 3) {
                        continue;
                    } else {
                        withdrawelNr = withdrawelNr - (requiredBills * billNameAndCount[0][j]);
                        alert(`you are missing ${withdrawelNr} € in loop ` + (j+1) + `.`);
                    } 
                } else if (billNameAndCount[1][j] < requiredBills) {
                    alert(`Not enough ${billNameAndCount[0][j]} € bills available. Giving you maximum possible amount instead.`);
                    given = given + (billNameAndCount[1][j] * billNameAndCount[0][j]);
                    alert(`you have been given ${given} € in loop ` + (j+1) + `.`);
                
                    // check if in last loop
                    if (j === 3) {
                        continue;
                    } else {
                        withdrawelNr = withdrawelNr - (billNameAndCount[1][j] * billNameAndCount[0][j]);
                        alert(`you are missing ${withdrawelNr} € in loop ` + (j+1) + `.`);
                    }
                } else {
                    alert("ERROR in the IF part!");
                } 
            } else {
                alert(`No ${billNameAndCount[0][j]}s needed.`)
            }
        }
        validAmount = false;
    }
    alert("End of programm");
}