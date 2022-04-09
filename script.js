function myFunction(){
    var inputUsername = document.getElementById("user").value;
    var inputPassword = document.getElementById("pass").value;
    localStorage.setItem("youruser",inputUsername);
    localStorage.setItem("yourpass",inputPassword);
}