//CORREN EN CUALQUIER NAVEGADOR VIEJO O MODERNO
//DESVENTAJA COMPOSICION TOSCA, ANIDAMIENTOS 
//instancia

let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest;
    //get traer informacion, de forma asincrona por eso true
    xhttp.open('GET', url_api, true);
    //si este cambio sucede se ejecuta la funcion
    xhttp.onreadystatechange = function(event){
        //hay diferentes estados
        /*	Holds the status of the XMLHttpRequest.
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready*/ 
        if(xhttp.readyState === 4){
            //ver si la ejecución fue correcta
            /*
            200: "OK"
            403: "Forbidden"
            404: "Page not found"
            */
            if(xhttp.status === 200){
                //se parsea a JSON 
                callback(null, JSON.parse(xhttp.responseText));
            }
            else{

                const error = new Error('Error '+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();    
}
fetchData(API,function(error1, data1){
    if(error1) return console.log(error1);
    //si funciona se ejecuta
    //results forma parte del contenido del api hay una categoria en el json, 0 es el primer personaje y se obtiene su ID
    fetchData(API + data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2);
        //tercer peticion al fetch
        //se accede al elemento url que esta dentro de origin
        //mando error3 y recibo data3
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.log(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        
        });
    })
})