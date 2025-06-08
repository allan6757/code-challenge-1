
function estimateTransactionFee() {
    let amountToSend = prompt("Unatuma Ngapi? (KES):");
    amountToSend = Number(amountToSend);

    let fee = amountToSend * 0.015;


    if (fee < 10) {
        fee = 10;
    }

    else if (fee > 70) {
        fee = 70;
    }

    let totalAmount = amountToSend + fee;


    console.log("Sending KES " + amountToSend + ":");
    console.log("Calculated Transaction Fee: KES " + fee);
    console.log("Total amount to be debited: KES " + totalAmount);
    console.log("Send Money Securely!");
}


estimateTransactionFee();