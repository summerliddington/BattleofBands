let bandNumber = 1;
const takeNumber = function(bandName) {
let thingIWantToSee = `${bandNumber}.${bandName}`
    bandNumber++
    return thingIWantToSee
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console