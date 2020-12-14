let adultsInput = document.getElementById("adults")
let kidsInput = document.getElementById("kids")
let durationInput = document.getElementById("duration")
let resultSection = document.getElementById("result")

//defines the base value of meat that people will eat
function defineMeatPerPerson(duration) {
    if(duration >= 6) {
        return 650;
    } else if(duration > 0){
        return 400;
    } else {
        return 0;
    }
}

//defines the base value of beer that people will drink
function defineBeerPerPerson(duration) {
    if(duration >= 6) {
        return 2000;
    } else if(duration > 0){
        return 1200;
    } else {
        return 0;
    }
}

//defines the base value of soda/water that people will drink
function defineDrinksPerPerson(duration) {
    if(duration >= 6) {
        return 1500;
    } else if(duration > 0){
        return 1000;
    } else {
        return 0;
    }
}

//calculates how much meat, beers and soda/water will be necessary for a barbecue
function calculate() {
    const adultsNumber = adultsInput.value
    const kidsNumber = kidsInput.value
    const duration = durationInput.value

    const totalMeat = defineMeatPerPerson(duration) * adultsNumber + (defineMeatPerPerson(duration) / 2 * kidsNumber)
    const totalBeer = defineBeerPerPerson(duration) * adultsNumber
    const totalDrinks = defineDrinksPerPerson(duration) * adultsNumber + (defineDrinksPerPerson(duration) / 2 * kidsNumber)
    resultSection.innerHTML = `<p>${totalMeat/100}Kg de carne</p>\n<p>${Math.ceil(totalBeer/355)} Latas de Cerveja\n<p>${Math.ceil(totalDrinks/2000)} Garrafas de 2l Bebidas</p></p>`
}