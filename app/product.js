import './database/init-firebase.js'

const CD = document.getElementById('Chude');
const MSP = document.getElementById('maSP');
const Name = document.getElementById('tenSp');
const Price = document.getElementById('gia');
// const Photo = document.getElementById('hinhanh');
const Content = document.getElementById('noidung');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');

const database = firebase.database();
const rtRef = database.ref('SANPHAM');

//addsp
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rtRef.child(CD.value).set({
        idSP: MSP.value,
        name: Name.value,
        price: Price.value,
        // photo: Photo.value,
        content: Content.value
       
    });
});

//update
updateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    var newData ={
        idSP: MSP.value,
        name: Name.value,
        price: Price.value,
        //photo
        content: Content.value
    };
    rtRef.child(CD.value).update(newData);
});

//delete
deleteBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    rtRef.child(CD.value).remove()
    .then(() =>{
        window.alert('clmm');
    })
    .catch(error =>{
        console.error(error);
    });
});

//ordering funtion
// rtRef.orderByKey.limitToLast    (2).on('value', snpashot =>{

// });

//list data
var newPostRef = postListRef.push();
newPostRef.set({
   
});