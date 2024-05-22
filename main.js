let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("qual seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'Seja muito bem vindo.';
}else{
    elemento.textContent = nomeUsuário;
}

