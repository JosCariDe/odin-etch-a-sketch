const containerOrigin = document.querySelector('#container-origin');

const clonar = (elemento) => {
    const divClon = elemento.cloneNode(true);
    containerOrigin.appendChild(divClon);
}



const crearCuadriculas = (dimensiones) => {

    const div = document.createElement('div');
    div.classList.add('container-item');

    div.addEventListener('mouseover', () => {
        div.classList.add('red');
    })
    div.addEventListener('mouseout', () => {
        console.log('Hola');
    })

    for (let i = 0;  i < dimensiones ; i++ ) {
        for (let j = 0; j < dimensiones; j++) {
            clonar(div);
        }
    }

}

crearCuadriculas(16);

