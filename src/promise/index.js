const somethingWillHappen = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            //es correcto si se resuelve la promesa
            resolve('Hey!');
        }
        else{
             //no se resolve 
            reject('Whoops');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));



const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
            resolve('true');
            },2000)
        } else{
            const error = new Error('xx');
            reject(error);

        }       
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(err => console.error(err));

//varias problemas al mismo tiempo o encadenadas

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response =>{
    console.log('Array of results',response);
})
.catch(err =>{
    console.error(err);

})