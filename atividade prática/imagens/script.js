//getAttribute - Obter o valor do atributo ( valor da linha)

//setAttribute - Definir ou modificar o valor

function changeImage() {
    const img = document.getElementById("myImage");//Aqui conseguimos armazenar o conteúdo da imagem

    const currentSrc = img.getAttribute("src");//aqui pegamos o atributo SRC da imagem, reponsãvel pela alteração da img.

    if (currentSrc === "imagem01.png") { //Se (if) a origem atual da imagem for igual a "imagem01.png"
        img.setAttribute("src", "imagem02.jpg") //Usando o setAttribute vamos modificar o valor do src, especificando a outra img
        img.setAttribute("alt", "mesa na varanda");

    }else{
        //Se não, fazer o processo inverso basicamente
        img.setAttribute("src", "imagem01.jpg");
        img.setAttribute("alt", "homem na varanda");
    }
}
//if = se a condição for válida execute algo
//else = caso contrário / se não