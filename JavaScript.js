$("form#LoginForm").submit(function (e){
    e.preventDefault();
    var username = document.getElementById('UserName').value;
    var password = document.getElementById('Password').value;
    if(username.toLowerCase() == "admin" || password.toLowerCase() == "0000"){
        Swal.fire(
            'Logged In',
            'Redirecting You...',
            'success'
          )
        sessionStorage.setItem("Logged", "1");
        setTimeout(() => {
            window.location.href = "Lobby";
        }, 500);

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Username or Password',
          })
    }
})