
let textEntrada = document.querySelector("#entrada");
let lista  = document.querySelector("#lista"); 

document.getElementById("btnAdicionar").addEventListener("click", function (){
    if (textEntrada.value.trim() != ""){
        let li = document.createElement("li");
        li.innerText = textEntrada.value;

        li.addEventListener("click", function(){
            li.classList.toggle("concluida");
        });

    let botaoRemover = document.createElement("span");
    botaoRemover.innerText = " X";
    botaoRemover.classList.add("btnRemover");

    botaoRemover.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    })
        
        lista.appendChild(li);
        li.appendChild(botaoRemover);

        textEntrada.value = "";

} else {
    alert("O campo está vazio, digite um item!");
}
});

document.getElementById("btnLimpar").addEventListener("click", function(){
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
})

document.getElementById("btnAdicionar").addEventListener("click", atualizarContadores);
document.getElementById("btnLimpar").addEventListener("click", atualizarContadores);
document.getElementById("lista").addEventListener("click", atualizarContadores);

let comprados= document.querySelectorAll("#comprados");
let naocomprados= document.querySelectorAll("#naocomprados");

function atualizarContadores(){
    let totalItens = lista.querySelectorAll("li").length; 
    let comprados = 0;
    let naocomprados = 0;
     
    for (let i=0; i < totalItens; i++){
        if (lista.querySelectorAll("li")[i].classList.contains("concluida")){
            comprados++;
        }
        naocomprados=totalItens - comprados;
}
    document.getElementById("comprados").innerText = comprados;
    document.getElementById("naocomprados").innerText = naocomprados;

}
