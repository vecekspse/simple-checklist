'use strict'
let items = document.querySelectorAll('.checklist li')
let inputs = document.querySelectorAll('.checklist li input')
for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', obarvi)
    items[i].addEventListener('dblclick', editItem)
    inputs[i].addEventListener('blur', updateItem)
    inputs[i].addEventListener('keypress', keypressUpdate)
}
function editItem() {
    this.classList.add('edit')
    let input = this.querySelector('input')
    input.focus()
    input.setSelectionRange(0, input.value.length)
}
function updateItem() {
    this.previousElementSibling.textContent = this.value;
    this.parentNode.classList.remove('edit')
}
function keypressUpdate(e) {
    let code = e.which || e.keyCode
    if(code === 13) {
        updateItem.call(this)
    }
}
function obarvi (e) {    
    if(!e.ctrlKey && !this.classList.contains('selected')){
       smazObarveni() 
    }
    this.classList.toggle('selected')
}
function smazObarveni () {
    let items = document.querySelectorAll('.checklist li.selected')
    for(let item of items) {
        item.classList.remove('selected')
    }
}
