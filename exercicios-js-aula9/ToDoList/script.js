const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let list = [];

newListForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const listName = newListInput.value
    if (listName  === mull || listName === '') return
       
    const list = creatList(listName)
    newListInput.value = null
    list.push(list)
})