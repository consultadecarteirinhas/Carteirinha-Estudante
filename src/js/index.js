document.querySelector("#ok-btn").addEventListener("click", function(){
    var input = document.getElementById("carteirinha");
    var texto = input.value;

    if(texto === "3273575b3") {
        window.location.replace("https://consultadecarteirinhas.github.io/Carteirinha-Estudante/user_3273575b3.html")
    }else if(texto === "3284675b2"){
        window.location.replace("https://consultadecarteirinhas.github.io/Carteirinha-Estudante/user_3284675b2.html")
    }
})