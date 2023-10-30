let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    //PEGAR O VALOR DIGITADO
    let valorInput = input.value;

    //VERIFICA SE O VALOR É VAZIO NULO OU INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
<div onclick="marcar(${contador})" class="item-icone">
    <i id=icone_${contador} class="mdi mdi-circle-outline"></i>
    <!-- <i class="mdi mdi-check-circle-outline"></i> -->
</div>
<div  onclick="marcar(${contador})" class="item-nome">
    ${valorInput}
</div>
<div class="item-botao">
    <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
</div>
</div>`;

        main.innerHTML += novoItem;
        input.value = "";
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if (classe == "item") {
        item.classList.add('feito');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        item.parentNode.appendChild(item);

    } else {

        var icone = document.getElementById('icone_' + id);
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');

    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})





