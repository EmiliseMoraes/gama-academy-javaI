var colors = ["black", "white", "yellow","green", "blue"];//array 



// sempre tem que passar 3 informações sendo a primeira um contador
// é iniciado em 0 e executado enquanto a segunda informação for verdadeira
// 2 informação é o tamanho do array - usamos .length para informar o
// "comprimento", mas no lugar poderia ser usado um numero
// 3 informação v vai verificar se vai incrementar ou decremntar
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

//repetição sem array

for(var i = 0; i < 10; i++){
    console.log(i)
}

//Usando o while que executa o laço 
//enquanto a iformação for verdadeira

var i = 0;

//Se i for menor que 10 ele vai incrementar sempre +1
//no caso de 0 a 9
while(i<10){
    console.log(i);
    i++
}

//Usando o doWhile
//Executa somente se a inforçmação for verdadeira
//Executa primeiro o do
//Passa pelo while, ve se e verdadeira
//Se for ai pode executar
do{
    console.log(i);
    i++;

} while(i < 10);

