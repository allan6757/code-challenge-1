function calculateChaiIngredients() {
    // Ask how many cups the user wants
    let cups = prompt("Unakunywa vikombe vingapi vya chai?");
    cups = Number(cups);

    // Check if input is valid
    if (isNaN(cups) || cups <= 0) {
        console.log("Tafadhali weka namba halali ya vikombe.");
        return;
    }

    // Amounts per cup
    let water = cups * 200;     // in ml
    let milk = cups * 50;       // in ml
    let teaLeaves = cups * 1;   // in tbsp
    let sugar = cups * 2;       // in tsp

    // Print results
    console.log("Kwa vikombe " + cups + " vya chai:");
    console.log("Maji: " + water + " ml");
    console.log("Maziwa: " + milk + " ml");
    console.log("Majani chai: " + teaLeaves + " tbsp");
    console.log("Sukari: " + sugar + " tsp");
    console.log("Chai safi tayari!");
}

calculateChaiIngredients();
