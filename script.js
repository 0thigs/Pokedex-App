
let n = 1

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
    .then(data => { //CHANGE DE TYPES TO DESIGN
        let datatype = data.types
        let type = data.types[0].type.name
        let chngType = document.getElementById("type")
        console.log(datatype.length)
        if(datatype.length == 1) {
            chngType.innerHTML = `Type: ${type}`
        }
        else if(datatype.length = 2){
            let typeTwo = data.types[1].type.name
            chngType.innerHTML = `Type: ${type} and ${typeTwo}`
        }
    })
}

function Minus() {
    n--
    if (n < 0) {n = n+1}
    console.log(n)
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
    .then(data => { //CHANGE DE TYPES TO DESIGN
        let datatype = data.types
        let type = data.types[0].type.name
        let chngType = document.getElementById("type")
        console.log(datatype.length)
        if(datatype.length == 1) {
            chngType.innerHTML = `Type: ${type}`
        }
        else if(datatype.length = 2){
            let typeTwo = data.types[1].type.name
            chngType.innerHTML = `Type: ${type} and ${typeTwo}`
        }
    })
}
