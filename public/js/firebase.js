'use strict';

//grab a form
const form = document.querySelector('.subscribe-form');

//grab an input
const inputName = form.querySelector('#inputName');
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const config = {
    apiKey: "AIzaSyCYn9qhBqy0fPJOvZ7sRX-W3xRHj8cRKUw",
    authDomain: "first-hosted-project.firebaseapp.com",
    databaseURL: "https://first-hosted-project.firebaseio.com",
    projectId: "first-hosted-project",
    storageBucket: "first-hosted-project.appspot.com",
    messagingSenderId: "539173537573",
};


//create a functions to push
    function firebasePush(name, email) {
        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        console.log('==========');
        console.log(name);
        console.log(email);
        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                user: {name: name.value, email: email.value}
            }
        );
    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            console.log('submit');
            evt.preventDefault();
            firebasePush(inputName, inputEmail);
            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }