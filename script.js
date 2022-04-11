
let n = 0

function Plus() {
    n++
    fetch("https://pokeapi.co/api/v2/pokemon/"+n)
    .then(data => {
        data = data.json()
        return data
    })
    .then(data => {  //ADD THE NAME TO DESIGN
        let name = data.species.name
        let chngName = document.getElementById("pokename").innerHTML = name
        return data
    })
    .then(data => { //CHANGE THE IMG TO DESIGN
        let img = data.sprites.front_default
        let chngImg = document.getElementById("img").src = img
        return data
    })
    .then(data => { //CHANGE THE TYPES TO DESIGN
        let datatype = data.types
        let type = data.types[0].type.name
        let chngType = document.getElementById("type")
        if(datatype.length == 1) {
            chngType.innerHTML = `Type: ${type}`
        }
        else if(datatype.length = 2){
            let typeTwo = data.types[1].type.name
            chngType.innerHTML = `Type: ${type} and ${typeTwo}`
        }
        return data
    })
    .then(data => { //CHANGE THE HP TO DESIGN
        let hp = data.stats[0].base_stat
        let chngHP = document.getElementById("hp").innerHTML = `HP: ${hp}`
        return data
    })
    .then(data => { //CHANGE THE ATTACK TO DESIGN
        let attack = data.stats[1].base_stat
        let chngAttack = document.getElementById("attack").innerHTML = `Attack: ${attack}`
        return data
    })
    .then(data => { //CHANGE THE DEFENSE TO DESIGN
        let defense = data.stats[2].base_stat
        let chngDefense = document.getElementById("defense").innerHTML = `Defense: ${defense}`
        return data
    })
    .then(data => { //CHANGE THE SPEED TO DESIGN
        let speed = data.stats[5].base_stat
        let chngSpeed = document.getElementById("speed").innerHTML = `Speed: ${speed}`
        return data
    })
    .then(data => { //CHANGE THE ABILITIES TO DESIGN
        let abilities = [...data.abilities]
        let chngAbilities = document.getElementById("abilities")
        switch (abilities.length) {
            case 1:
                chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name}`
            case 2:
                chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name} and ${abilities[1].ability.name}`
            case 3: 
                chngAbilities.innerHTML = `Abilities: <span style="font-size: 10px;"><b>${abilities[0].ability.name}, ${abilities[1].ability.name} and ${abilities[2].ability.name}</b></span>`
        }
    })
}

function Minus() {
    n--
    if (n < 0) {n = n+1}
    fetch("https://pokeapi.co/api/v2/pokemon/"+n)
    .then(data => {
        data = data.json()
        return data
    })
    .then(data => {  //ADD THE NAME TO DESIGN
        let name = data.species.name
        let chngName = document.getElementById("pokename").innerHTML = name
        return data
    })
    .then(data => { //CHANGE THE IMG TO DESIGN
        let img = data.sprites.front_default
        let chngImg = document.getElementById("img").src = img
        return data
    })
    .then(data => { //CHANGE THE TYPES TO DESIGN
        let datatype = data.types
        let type = data.types[0].type.name
        let chngType = document.getElementById("type")
        if(datatype.length == 1) {
            chngType.innerHTML = `Type: ${type}`
        }
        else if(datatype.length = 2){
            let typeTwo = data.types[1].type.name
            chngType.innerHTML = `Type: ${type} and ${typeTwo}`
        }
        return data
    })
    .then(data => { //CHANGE THE HP TO DESIGN
        let hp = data.stats[0].base_stat
        let chngHP = document.getElementById("hp").innerHTML = `HP: ${hp}`
        return data
    })
    .then(data => { //CHANGE THE ATTACK TO DESIGN
        let attack = data.stats[1].base_stat
        let chngAttack = document.getElementById("attack").innerHTML = `Attack: ${attack}`
        return data
    })
    .then(data => { //CHANGE THE DEFENSE TO DESIGN
        let defense = data.stats[2].base_stat
        let chngDefense = document.getElementById("defense").innerHTML = `Defense: ${defense}`
        return data
    })
    .then(data => { //CHANGE THE SPEED TO DESIGN
        let speed = data.stats[5].base_stat
        let chngSpeed = document.getElementById("speed").innerHTML = `Speed: ${speed}`
        return data
    })
    .then(data => { //CHANGE THE ABILITIES TO DESIGN
        let abilities = [...data.abilities]
        let chngAbilities = document.getElementById("abilities")
        switch (abilities.length) {
            case 1:
                chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name}`
            case 2:
                chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name} and ${abilities[1].ability.name}`
            case 3: 
                chngAbilities.innerHTML = `Abilities: <span style="font-size: 10px;"><b>${abilities[0].ability.name}, ${abilities[1].ability.name} and ${abilities[2].ability.name}</b></span>`
        }
    })
}
