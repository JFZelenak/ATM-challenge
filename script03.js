function atmFunction() {
let maxNumber = 10000;
    let validAmount = false;
    let withdrawelNr = "";
    let requiredBills = 0;
    let given = 0;
    const billNameAndCount = [[100,50,20,10],[999,3,1,999]];

    alert(`the maximum withdrawel amount is ${maxNumber}€. There are ${billNameAndCount[1][0]} x ${billNameAndCount[0][0]} bills, ${billNameAndCount[1][1]} x ${billNameAndCount[0][1]} bills, ${billNameAndCount[1][2]} x ${billNameAndCount[0][2]} bills, ${billNameAndCount[1][3]} x ${billNameAndCount[0][3]} bills.`);

    // prompt and check withdrawel amount
    while (!validAmount) {
        withdrawelNr = prompt(`Please input withdrawel amount (from 10 to ${maxNumber} and divisible by 10) in €: `);

        alert("you want to withdraw " + withdrawelNr + " €.");

        if (withdrawelNr % 10 === 0) {
            if (withdrawelNr > 10 && withdrawelNr < maxNumber) {
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
                    alert(`There are `)
                    continue;
                } else if (billNameAndCount[1][j] >= requiredBills) {
                    given = given + (requiredBills * billNameAndCount[0][j]);
                    alert(`you have been given ${given} € in loop ` + (j+1) + `.`);
                    if (j === 3) {
                        continue;
                    } else {
                        withdrawelNr = withdrawelNr - (requiredBills * billNameAndCount[0][j]);
                        alert(`you are missing ${withdrawelNr} € in loop ` + (j+1) + `.`);
                    } 
                } else if (billNameAndCount[1][j] < requiredBills) {
                    given = given + (billNameAndCount[1][j] * billNameAndCount[0][j]);
                    alert(`you have been given ${given} € in loop ` + (j+1) + `.`);
                
                    // don't check for missing money in the last loop
                    if (j === 3) {
                        continue;
                    } else {
                        withdrawelNr = withdrawelNr - given;
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