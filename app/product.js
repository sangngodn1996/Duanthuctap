import './database/init-firebase.js'

const CD = document.getElementById('Chude');
const MSP = document.getElementById('maSP');
const Name = document.getElementById('tenSp');
const Price = document.getElementById('gia');
const fileImage = document.getElementById('addImage');
const Content = document.getElementById('noidung');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');

const database = firebase.database();
const rtRef = database.ref('SANPHAM');
const storage = firebase.storage();

//addsp
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rtRef.child(CD.value).set({
        idSP: MSP.value,
        name: Name.value,
        price: Price.value,
        content: Content.value
       
    });

    

});

//add image
fileImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const StorageRef = storage.ref('image/' + file.name);
    StorageRef.put(file);
});


//update

//delete