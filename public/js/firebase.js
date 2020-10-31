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
    //push itself
    firebase.database().ref('subscribed_users').push().set({
            user: {name: name.value, email: email.value}
        });
}

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            // TODO: find why function doesn't trigger without preventDefault
            evt.preventDefault();
            firebasePush(inputName, inputEmail);
            alert('Thank you for your registration');
        })
    }