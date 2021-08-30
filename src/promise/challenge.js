//GRAN CAPACIDAD DE TRABAJAR CON ASINCRONISMO SE ACTUALIZA MAS
//DESVENTAJA NO MANEJA EXCEPCIONES , CATCH HASTA AL FINAL, PROPENSOS A ERROR SI NO SE RETURNAN LLAMADOS
//HAY QUE TRANSPILAR HERRAMIENTAS PARA HACERLO FUNCIONAL EN NAVEGADORES, CON BABEL
//SE REQUIERE POLIFY PARA TRANSPILAR COMO BABEL
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data =>{
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)
})
.then(data =>{
    console.log(data.name)
    return fetchData(data.origin.url)
})
.then(data  => {
    console.log(data.dimension)
})
.catch(err =>console.error(err));