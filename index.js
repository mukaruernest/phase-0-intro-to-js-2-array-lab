// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyRemoveLastCat(name) {
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    const newArray = cats.slice()
    newArray.push(name)
    return newArray
}
function prependCat(name){
    const newArray =  cats.slice()
    newArray.unshift(name)
    return newArray
}
function removeLastCat(){
    const newArray = cats.slice(0,2)
    return newArray
}
function removeFirstCat(){
    const newArray = cats.slice(-2)
    return newArray
}