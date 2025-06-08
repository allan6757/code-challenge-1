function calculateBodaFare() {
  // Ask the user for distance
  let distance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
  distance = Number(distance);

  if (isNaN(distance) || distance <= 0) {
    console.log("Tafadhali andika kilomita halali.");
    return;
  }

  // Fare rates
  let baseFare = 50;
  let perKm = 15;
  let tripFare = distance * perKm;
  let total = baseFare + tripFare;

  // Show result
  console.log("Uko kwote? Io ni " + distance + " km:");
  console.log("Ukikalia Pikipiki: KES " + baseFare);
  console.log("Mpaka Uko: KES " + tripFare);
  console.log("Total: KES " + total);
  console.log("Panda Pikipiki!");
}

calculateBodaFare();