/* modulos */
const process = require('process');
const articulos = require('./data.json'); //json parseado
const papelera = require('./papelera.json'); //json parseado
const acciones = require('./acciones');
const { setTimeout } = require('timers');

/* datos ingresados */
const action = process.argv[2];
const title = process.argv[3];
const price = process.argv[4];
const stock = process.argv[5];

const lastId = articulos[articulos.length - 1].id;

function newArticle(title,price,stock, lastId) {
    this.id = lastId + 1;
    this.title = title;
    this.price = price;
    this.stock = stock;
}

/* proceso */

switch (action) {
    case "listar":
        acciones.listar();
        break;

    case "agregar":
        /* validación */
        let position = false;
        for (let i = 0; i < articulos.length; i++) {
            position = articulos[i].title.indexOf(title.toLowerCase()) !== -1;
            if(position){
                console.log('+++++++++++++++++++++++++++++++++++++++++++++');
                console.log(`El artículo "${title}" se encuentra registrado.`);
                console.log('+++++++++++++++++++++++++++++++++++++++++++++');
                break
            }
        }
        if(position){
            break
        }
        acciones.agregar(new newArticle(title,price,stock, lastId));
        break;

    case "eliminar":

        acciones.eliminar();
        break;

    case "papelera":

        acciones.papelera()
        break

    case "recuperar":

        let posicion = papelera.indexOf(articulo);

        if(posicion === -1){
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(`El artículo ${articulo} no se encuentra en la papelera`);
            console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
            break
        }else{
            acciones.recuperar(posicion);
        }
        break;

    case undefined:

        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log('Debe escribir una acción: [listar, agregar, eliminar, recuperar]');
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        break;

    default:

        console.log('+++++++++++++++++++++++++++++++++++++++++++');
        console.log('La acción no está contemplada en el sistema');
        console.log('+++++++++++++++++++++++++++++++++++++++++++');
        break;
}


























/* if (accion === "agregar") {

    acciones.agregar(articulo);

}else if(accion === "eliminar"){

    acciones.eliminar();

}else if(accion === "listar"){

    acciones.listar();
}else{
    console.log('La acción no está contemplada en el sistema');
}
 */