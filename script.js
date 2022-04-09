
let n = 0

function Plus() {
    n++
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
    })
}
