console.log(localStorage)

document.getElementById('emailInput') .oninput = function(){
    const emailInputValue = document.getElementById('emailInput') .value;
    if (emailInputValue === localStorage.getItem('email')){
        document.querySelector('.disapearBtn') .style = 'display: inline';
    }
}

document.getElementById('nextBtn') .onclick = function(){
    document.getElementById('emailInput') .style = 'display: none';
    document.getElementById('passwordInput') .style = 'display: inline';
    document.querySelector('.disapearBtn') .style = 'display: none';
}

document.getElementById('passwordInput') .oninput = function(){
    const passwordInputValue = document.getElementById('passwordInput') .value;
    if (passwordInputValue === localStorage.getItem('password')){
        document.getElementById('logInBtn') .style = 'display: inline';
    }
}