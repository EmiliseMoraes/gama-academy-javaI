class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

   //função 
    read(){
        return `Estou Lendo ${this.title}`
    } 
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book ('A culpa é das estrelas', 'Jonh Green', 300);
console.log(book.read())
console.log(otherBook.read())
console.log(book,otherBook)


//Herança

class ITBook extends Book {
    constructor (title, author,pages,technology){
        super(title,author,pages);
        this.technology = technology;

    }
}

let itbook = new ITBook('Algoritmos para viver', 'Brian', 500, 'Algoritimos');
console.log(itbook)

//Encapsulamento com getters e setters

class Person {
    constructor(name){
        this._name = name; //Como se fosse um propriedade privada

    } //Usar os get e set para poder "liberar a informação"

    get name() {
    return this._name
}
    set  name (value){
        this._name = value;
    }
}

let person = new Person('Emilise')
person.name = 'Emi'
console.log(person.name) //Disponibilizando a informação a pessoa