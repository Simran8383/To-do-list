let input = document.querySelector("#input-box")
let button = document.querySelector("#btn")
let listContainer= document.querySelector("#list-container")


function addTask(){
    let li =document.createElement("li")
    li.innerHTML=input.value
    listContainer.appendChild(li)
}
