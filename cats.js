const cantidadDeGatos = 10
for (let cat = 1; cat <= cantidadDeGatos; cat++) {
    const catString = "Gato #"
    const catWhithNumber = catString.concat(cat).concat(": ")
    let catComplete;
    if (cat % 3 === 1) {
        catComplete = catWhithNumber.concat("😺")
    } else if (cat % 3 === 2) {
        catComplete = catWhithNumber.concat("😸")
    } else {
        catComplete = catWhithNumber.concat("😹")
    }
    console.log(catComplete)
}

const cantidadDePasos = 5
for (let cat = 1; cat <= cantidadDeGatos; cat++) {
    const catString = "Gato #"
    const catWhithNumber = catString.concat(cat).concat(": ")
    let catComplete
    if (cat % 2 === 0) {
        catComplete = catWhithNumber.concat("🐈‍⬛");
    } else {
        catComplete = catWhithNumber.concat("🐈");
    }
    for (let pasos = 1; pasos <= cantidadDePasos; pasos++) {
        catComplete = catComplete.concat("🐾")

    }

    console.log(catComplete)
}