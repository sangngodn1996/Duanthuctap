import './database/init-firebase.js'

const id = document.getElementById('IdUser');
const user = document.getElementById('username');
const pass = document.getElementById('password');
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Age = document.getElementById('age');
const Phone = document.getElementById('phone');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');

const database = firebase.database();
const rootRef = database.ref('USER');

//addtk
addBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    rootRef.child(id.value).set({
        username: user.value,
        password : pass.value,
        name: Name.value,
        email: Email.value,
        age : Age.value,
        phone: Phone.value
    });
});

