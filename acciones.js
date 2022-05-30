const fs = require('fs');
const path = require('path');

const articulos = require('./data.json');
const papelera = require('./papelera.json');

module.exports = {
    listar : function(){

        for (let i = 0; i < articulos.length; i++) {
            console.log(`${i + 1 }.- ${articulos[i].title} - stock: ${articulos[i].stock}`);
        }
        return false

    },
    agregar : function(articulo){
        
        articulos.push(articulo);
        fs.writeFileSync('./data.json',JSON.stringify(articulos,null,3))
        return this.listar()

    },
    eliminar : function(){

        let articuloEliminado = articulos.pop();
        fs.writeFileSync('./data.json',JSON.stringify(articulos,null,3));
        
        papelera.push(articuloEliminado);
        fs.writeFileSync('./papelera.json',JSON.stringify(papelera,null,3));

        return this.listar()

    },
    papelera : function(){

        const papeleraJSON = path.join(__dirname,'papelera.json');
        const papeleraParseada = JSON.parse(fs.readFileSync(papeleraJSON,'utf-8'));
        return console.log(papeleraParseada);

    },
    recuperar : function(posicion){
        let nuevaPapelera = [];
        articulos.push(papelera[posicion])
        fs.writeFileSync('./data.json',JSON.stringify(articulos,null,3));

        for (let i = 0; i < papelera.length; i++) {
          if(i !== posicion){
              nuevaPapelera.push(papelera[i])
          }
        }
        
        fs.writeFileSync('./papelera.json',JSON.stringify(nuevaPapelera,null,3));
        return this.papelera()


    }
}