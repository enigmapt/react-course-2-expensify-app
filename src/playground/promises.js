const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        ///////////////// RESOLVE
        //resolve('This is my resolved data');
        // resolve({
        //     name:'Pedro',
        //     age: 30
        // })
        // resolve('This my other resolved data');
        ///////////////// REJECT  
        reject('Something went wrong') //if no catch is defined down, it throws a javascript error
    }, 3000)
});

console.log('before')

//////////// only 1 argument for then
promise.then((data)=> {
    console.log('1', data)
}).catch((error) => {
    console.log('error: ', error)
});


//////////// handling errors, passing 2 arguments in then. replaces catch <- alternative syntax
// promise.then((data) => {
//     console.timeLog('1', data)
// }, (error) => {
//     console.log('error: ', error)
// })


console.log('after')