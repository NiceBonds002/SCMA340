// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxoHFLUPiDl9UrjxCE22auLoEBQTCM5QI",
    authDomain: "week14-16448.firebaseapp.com",
    databaseURL: "https://week14-16448-default-rtdb.firebaseio.com",
    projectId: "week14-16448",
    storageBucket: "week14-16448.appspot.com",
    messagingSenderId: "577653557776",
    appId: "1:577653557776:web:8737ae926f218fdb401895"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


import{getDatabase, ref, get, set, child, update, remove, onValue, onChildAdded, onChildChanged, onChildRemoved}
from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

;
const db = getDatabase();

var inputUsername = document.getElementById("user");
var inputPassword = document.getElementById("pass");


function loginData(){
    const dbref = ref(db);
    get(child(dbref,"User/"+inputUsername.value)
    )
    .then((snapshot) =>{
        if(snapshot.exists()){
            let passwords = snapshot.val().password;
            if(passwords==inputPassword.value){
                alert("Login successfully. Welcome "+inputUsername.value);        
                localStorage.setItem("youruser",inputUsername.value);
                localStorage.setItem("yourpass",inputPassword.value);
                window.open("signin2.html","_blanks");
            }
            else{
                alert("Data not found!");
            }

        }
        else{
            alert("Data not found!"); 
        }
    })
    .catch((error) =>{
        alert("unsuccessful, error"+error);
    });
}
btn_login.addEventListener('click',loginData);