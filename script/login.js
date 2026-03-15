document.getElementById("login-btn").addEventListener('click',() => {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value;

    if(username == "admin" && password == "admin123")
    {
        alert('login successful');
        window.location.replace('home.html');
    }
    else{
        alert('Wrong Information !!!');
        return;
    }
})