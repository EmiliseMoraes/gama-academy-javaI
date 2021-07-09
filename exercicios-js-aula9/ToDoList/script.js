const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []


//addEventListener é uma função nativa do JS 
// nesse caso do exemplo a baixo usamos o Callback, pois usamos uma funçao oculta e nao damos nome a ela.
newListForm.addEventListener('submit', function(e) {
    e.preventDefault() //Toda vez q o navegador recebe um submit a página é atualizada
    //Para não perdermos essa lista usamos esse evendo e( que e o nome da função)
    //e.preventDEfault()
    const listName = newListInput.value //pegando o valor do input
    if (listName  === null || listName === '') return //Fazendo uma verificação
    //Toda vez que o input estiver vazio ou nulo, não precisa seguir
       //Se não entrar no if vamos popular a lista
    const list = createList(listName) // criando a função toda vez que clicar no botão
    //e o item for para baixo
    newListInput.value = null //limpar a caixa (o input)
    lists.push(list) //atualizar a lista (push) é um metodo nativo 
    //que pega o item que acabamos de criar e coloca no final do array

    render()

}) 
function createList(name) {
    return {id: Date.now().toString(), name: name}//Função que retorna a montagem do obj
}



    //criando a função que foi chamada a cima usando o forEach
    //que percorre a lista de itens
    //o forEach não precisa das 3 verificações como no for 
    function render() {
        clearElement(listContainer)

    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')// metodo que adiciona uma classe a lista de classes
        item.innerText = list.name //recebe como texto o list 
        listContainer.appendChild(item) //listContainer é o metoodo mae que recebe o metodo filho
        //que no caso é o appenChild que pega a div fantasma que esta no HTML
    })       
  function clearElement(element) {
      while(element.firstChild) {
          element.removeChild(element.firstChild)
      }
  }
}


render()