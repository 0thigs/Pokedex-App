let n = null
let x = 1



function Search() { //SEARCH THE POKEMON
    n = document.getElementById("input").value
    if(typeof(n) === "string") {n = n.toLowerCase()} else {n = n}
    const url = "https://pokeapi.co/api/v2/pokemon/"+n
    fetch(url)
    .then(response => { 
        return response.json()
    })
    .then(data => {
        n = data.id
        console.log(n)
        Modifier(n)
        document.getElementById("input").value = ""
    })
}

function Modifier(n) { //MODIFY THE SCREEN
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
        if (abilities.length == 1) {
            chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name}`
        }
        else if (abilities.length == 2) {
            chngAbilities.innerHTML = `Abilities: ${abilities[0].ability.name} and ${abilities[1].ability.name}`
        }
        else if (abilities.length == 3) {
            chngAbilities.innerHTML = `Abilities: <span style="font-size: 10px;"><b>${abilities[0].ability.name}, ${abilities[1].ability.name} and ${abilities[2].ability.name}</b></span>`
        }
    })
}

function Plus() {
    n++
    x = 1
    Modifier(n)
}

function Minus() {
    n--
    x = 1
    if (n < 1) {n = n+1}
    Modifier(n)
}

function ImgChanger() {
    x++
    if(x>4) {x = x-4}
    fetch("https://pokeapi.co/api/v2/pokemon/"+n)
    .then(data => { 
        data = data.json()
        return data
    })
    .then(data => {
        fetch("https://pokeapi.co/api/v2/pokemon/"+data.species.name)
        .then(data => {
            data = data.json()
            return data
        })
        .then(data => {
            let img = document.getElementById("img")
            let sprt = data.sprites
            if(x === 1) {
                img.src = sprt.front_default
            }
            else if (x === 2) {
                img.src = sprt.back_default
            }
            else if (x === 3) {
                img.src = sprt.front_shiny
            }
            else if (x === 4) {
                img.src = sprt.back_shiny
            }
        })
    })
}