const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
//recuperando os Elementos do HTML

function aaTask() { //aki estamos criandpo uma função para ser atribuída dentro do botão "adicionar"

    if (input.value !== "") { //aki informa que se 'if' input.value (valor do campo) for diferente(!==) de vazio (""), ele irá criar um elemento (creatElement) de "li", o texto que ela possue é igual a input.value, ou seja, o valor do input que será digitado.
        const li = document.creatElement("li");//
        li.textoContent = input.value:// Traduzindo, esta linha está recebendo a criação da LI declarada na linha 8, que será criada e o seu valor textual será de acordo com o valor (value) do input.

        const removerBotao = document.createElemnt("button");// aki estamos criando botão (button) esses itens de (li)

        removerBotao.textoContent ="Remover"; // chamamos nossa const "removerBotao" e atribuindo a ele um texto/ nome chamado:"remover"

        removerBotao.onclick = function() { // criamos uma função que ao clicar neste botão ele irá executar a função específica 
            ul.removeChild(li); // a função é pegar o elemento FILHO da ul, que no caso é a "li" e removê-lo.


        };

        ul.appendChild(li); // estamos add um filho a nossa UL, qdo clicar sobre ele
        li.appendChild(removerBotao); // aki chamamos nossa const "li" e estamos add a ela um filho (appendChild)

        input.value = ""; // usado para limpar o input, depois de add o item em questão

    

    } else {
        alert("Calma Jovem, insira uma tarefa!"); // caso o campo de input estiver vazio, irá aparecer esta mensagem

    }

}
