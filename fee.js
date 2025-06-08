// Function to calculate the transaction fee
function estimateTransactionFee() {
    // Ask user for amount to send and turn it into a number
    let amountToSend = prompt("Unatuma Ngapi? (KES):");
    amountToSend = Number(amountToSend);

    // Calculate fee (1.5% of amount) and set min/max limits
    let fee = amountToSend * 0.015; // 1.5% of the amount

    // If fee is less than 10, make it 10 (minimum)
    if (fee < 10) {
        fee = 10;
    }
    // If fee is more than 70, make it 70 (maximum)
    else if (fee > 70) {
        fee = 70;
    }

    // Add fee to amount to get total to be taken
    let totalAmount = amountToSend + fee;

    // Show the results in the console
    console.log("Sending KES " + amountToSend + ":");
    console.log("Calculated Transaction Fee: KES " + fee);
    console.log("Total amount to be debited: KES " + totalAmount);
    console.log("Send Money Securely!");
}

// Start the function
estimateTransactionFee();
