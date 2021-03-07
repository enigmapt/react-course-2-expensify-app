import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    //measurementId: "G-D69W5YHHD8"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); //auth with google. this provided was passed in a function (auth.js)

export {firebase, googleAuthProvider, database as default};
















// /////ARRAYS IN FIREBASE

// //creating
// // database.ref('notes').push({ //random generated ID. push is used for list based data
// //     title: 'Course Topics',
// //     body: ' React Nativa, Angular, Python '
// // });

// //updating 
// // database.ref('notes/-MUdyfj2FEu9f_o4tIGV').remove()

// //convert the object to array - forEach
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot)=> {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot)=> {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses)
// //   });

// ///subscription
// // database.ref('expenses')
// // .on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot)=> {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses)
// // })

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added - fires 1 time for all the data already in firebase. rerun for all new expenses
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description: 'Wow',
//     note: 'Note 5',
//     amount: 15,
//     createAt: 123123123211414
// })












////// fetching data with on - rerun for every change - subscribe
// const onValueChange = database.ref().on('value', (snapshot) => { //value is the event
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//     database.ref('age').set(25)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange); //cancel subscriptions on that reference
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() =>{
//     database.ref('job/company').set('20 Valores')
// }, 3500)





////// fetching data once - no reruns
// database.ref('location/city')
//     .once('value') //fetch all the data once, returns a promise
//     .then((snapshot) => { //then has an argument here - snapshot
//         const val = snapshot.val() //return the data requested
//         console.log(val)
//     })
//     .catch((e)=> {
//         console.log('Error fetching data', e)
//     })






//   database.ref().set({
//       name: 'Pedro Neves',
//       age: 30,
//       isSingle: false,
//       job: 'Tutor',
//       location: {
//           city: 'Aveiro',
//           country: 'Portugal'
//       }
//   }).then( ()=> {
//     console.log('Data is saved!')
//   }).catch( (e)=> {
//     console.log('This failed.', e)
//   });


// /////////////// UPDATE - has to be called with object - update, create and remove using a single call. ONLY UPDATES AT ROOT LEVEL, nested object doesn't work
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Porto'
//     // location: {
//     //     city:'Porto'
//     // }
// })

// database.ref().update({
//     name: 'Andreia', //updated
//     age: 27, //updated
//     job: 'Software Developer', //add property
//     isSingle: null // remove property
// })

// //   database.ref().set('This is my data')

// // updating just a value - age
// // database.ref('age').set(31);
// // // updating nested value - city
// // database.ref('location/city').set('Porto');
// //adding a property
// database.ref('attributes').set({
//     height: 174,
//     weight: 79.9
// }).then(()=> {
//     console.log('Second set call worked')
// }).catch((e)=> {
//     console.log('Things didn\'t work for the second error ')
// });


// // console.log('I made a request to change the data.')


/////////DELETING DATA
//USING REMOVE
// database.ref('isSingle')
//     .remove()
//     .then(()=>{
//         console.log('Data was removed')
//     })
//     .catch(()=>{
//         console.log('Did not remove data', e)
//     })

//USING SET
// database.ref('isSingle').set(null)




////// CHALLENGE with update
// database.ref().set({
//     name: 'Pedro Neves',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Tutor',
//         company: '20 valores'
//     },
//     location: {
//         city: 'Vagos',
//         country: 'Portugal'
//     }
// }).then( ()=> {
//   console.log('Data is saved!')
// }).catch( (e)=> {
//   console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Rimas ao quadrado',
//     'location/city': 'Aradas'
// })
