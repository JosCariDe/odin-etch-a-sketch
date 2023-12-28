var containerOrigin = document.querySelector('#container-origin');

const clonar = (elemento) => {

    const divClon = elemento.cloneNode(true);

    divClon.addEventListener('mouseenter',() => {
        divClon.style.backgroundColor = 'red';
    })
    containerOrigin.appendChild(divClon);
}
/*
containerOrigin.addEventListener('mouseenter', () => {
    console.log('Hola');
}) */

const div = document.createElement('div');
div.classList.add('container-item');

div.addEventListener('click' , () => {
    div.style.backgroundColor = 'red';
})



const crearCuadriculas = (dimensiones) => {

    for (let i = 0;  i < dimensiones ; i++ ) {
        for (let j = 0; j < dimensiones; j++) {
            clonar(div);
        }
    }

}

const deleteCuadriculas = () => {
    containerOrigin.remove();
    console.log(containerOrigin);
    
    const divNuevo = document.createElement('div');
    divNuevo.setAttribute('id','container-origin');

    containerOrigin = divNuevo.cloneNode(true);

    const body = document.querySelector('body');
    body.appendChild(containerOrigin);
}

crearCuadriculas(16);

