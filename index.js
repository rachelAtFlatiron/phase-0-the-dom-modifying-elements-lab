// Write your code here!

let main = document.getElementById('main')
// # is for ids, . is for classes
main = document.querySelector('#main')
main.remove()
const body = document.getElementsByTagName('body')[0]

for(let i = 0; i < 10; i++){
    const newHeader = document.createElement('h1')
    newHeader.id = 'victory'
    newHeader.textContent = 'YourName is the champion'
    body.append(newHeader)
}

//getElementsByTagName returns an HTMLCollection such that we can't use forEach(which is an array iterator) on it
//we have to convert the HTMLCollection to an array
//hence we use Array.from(<HTMLCollection>)
let htmlCollection = document.getElementsByTagName('h1') //get all tags
let htmlArray = Array.from(htmlCollection) //turn into Array 
htmlArray.forEach((el) => el.remove()) //use .forEach to remove each tag


//getElementsByTagName and getElementsByClassName will return arrays 
//document.body.append(newHeader)
