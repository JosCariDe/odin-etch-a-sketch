var containerOrigin = document.querySelector('#container-origin');
const btnReiniciar = document.querySelector('#btn-reiniciar');

const clonar = (elemento, dimension) => {

    const divClon = elemento.cloneNode(true);

    divClon.style.width = dimension + 'px';
    divClon.style.height = dimension + 'px';

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

const calcularDimensiones = (dimensiones) => {
    return 1000 / dimensiones;
}

const crearCuadriculas = (dimensiones) => {

    const dimension = calcularDimensiones(dimensiones);

    for (let i = 0;  i < dimensiones ; i++ ) {
        for (let j = 0; j < dimensiones; j++) {
            clonar(div, dimension);
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

btnReiniciar.addEventListener('click' , (e) => {
    deleteCuadriculas();
    const res = prompt('¿Cuantas cuadriculas quieres?');

    crearCuadriculas(res);
    
})

crearCuadriculas(16);

