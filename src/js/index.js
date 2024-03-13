document.querySelector("#ok-btn").addEventListener("click", function(){
    var input = document.getElementById("carteirinha");
    var texto = input.value;

    if(texto === "3273575b3") {
        window.location.replace("https://consultadecarteirinhas.github.io/Carteirinha-Estudante/user_3273575b3.html")
    }else if(texto === "3284675b2"){
        window.location.replace("https://consultadecarteirinhas.github.io/Carteirinha-Estudante/user_3284675b2.html")
    }
})

//Array de parametros 'chave=valor'
var params = window.location.search.substring(1).split('&');

//Criar objeto que vai conter os parametros
var paramArray = {};

//Passar por todos os parametros
for(var i=0; i<params.length; i++) {
    //Dividir os parametros chave e valor
    var param = params[i].split('=');

    //Adicionar ao objeto criado antes
    paramArray[param[0]] = param[1];

    var myInput = document.getElementById("carteirinha")
    myInput.value = params[1]
}


console.log(myInput.value)

