let mainsect = document.getElementById('mainsect');

///INICIAR JUEGO BTN
/// FUNCION CREADORA DE BOTONES
function createButton(text, id, funBtn, father){
    let btn = document.createElement('button');
    btn.innerText = text;
    btn.setAttribute('id', id);
    btn.addEventListener('click', funBtn);
    father.appendChild(btn)
}
/// CREA BOTON INICIAR JUEGO
createButton('Iniciar juego', 'btnIniciar', gameStart, mainsect);

/// BTN PARA JUEGO PERSONALIZADO
createButton('Agregar nueva palabra', 'btnIniciarPerson', gameStartPers, mainsect);

///PALABRAS
var arr = ['Mouse', 'Television', 'Celular'];
/// PALABRA SELECCIONADA
var word = [];
var word_ = [];
 

///PALABRA RANDOM
function randomPick() {
    let random = Math.floor(Math.random()*arr.length)
    var palabraRandom = arr[random];
    word = Array.from(palabraRandom);
    // LOG DE TESTEO
    console.log(word)
    dibujarLineas();
}

// CANTIDAD DE GUIONES NECESARIOS
/// AGREGAR UN DIV ABAJO DEL CANVAS CON LOS GUIONES PARA QUE SE MUESTREEE

function dibujarLineas() {
    for(i = 0; i < word.length; i++){
        word_.push('_');
    }
    
}


function createCanvas(father){
    var canvas = document.createElement('canvas');
    var pincel = canvas.getContext('2d');
    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0, 0, 900, 900);
    father.appendChild(canvas);
    
}

function createDiv(father, cssClass){
    var div = document.createElement('div');
    div.classList.add(cssClass);
    father.appendChild(div);

}


function newGame(){
    console.log('newgame')
}

function gameStart() {
    removeChilds();
    createCanvas(mainsect);
    randomPick();
    
    //PRUEBA
    let interactiveDiv1 = document.createElement('div')
    interactiveDiv1.classList.add('red')
    mainsect.appendChild(interactiveDiv1);
    
    function createLines() {
        let word_String = word_.toString();
    let parrafo = document.createElement('p');
    let parrafoText = document.createTextNode(word_String.replaceAll(',', ''))
    parrafo.appendChild(parrafoText);
    interactiveDiv1.appendChild(parrafo);
    mainsect.appendChild(interactiveDiv1);
    }
    createLines();
    

    ///DIV 2

    let wrongKeys = [];
    mainsect.addEventListener('keyup', console.log(event));
    //////Programa ONE - Live Coding Sprint 02 de Principiante en Programación

    let interactiveDiv2 = document.createElement('div')
    interactiveDiv2.classList.add('blue');
    let parrafo = document.createElement('p');
    let parrafoText = document.createTextNode(wrongKeys);



    

///LOG DE PRUEBA
console.log(word_String.replaceAll(',', ''));

    ///DIV 3
    let interactiveDiv3 = document.createElement('div')
    interactiveDiv3.classList.add('green')
    createButton('Nuevo juego', 'new-game', newGame, interactiveDiv3)
    createButton('Desistir', 'new-game', newGame, interactiveDiv3)
    mainsect.appendChild(interactiveDiv3);



}




function gameStartPers () {
    console.log('juego personalizado')
}



function removeChilds() {
    while (mainsect.firstChild) {
        mainsect.removeChild(mainsect.firstChild);
    }
}