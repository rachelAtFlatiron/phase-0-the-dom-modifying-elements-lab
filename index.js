// Write your code here!

let main = document.getElementById('main')
// # is for ids, . is for classes
main = document.querySelector('#main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'YourName is the champion'