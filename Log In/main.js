document.getElementById('nextBtn') .onclick = function(){
    const nameInputValue = document.getElementById('nameInput') .value;
    const emailInputValue = document.getElementById('emailInput') .value;
    const passwordInputValue = document.getElementById('passInput') .value;

    localStorage.setItem('name', nameInputValue);
    localStorage.setItem('email', emailInputValue);
    localStorage.setItem('password', passwordInputValue);

    console.log(localStorage);
}