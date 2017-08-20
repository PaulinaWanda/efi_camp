(() => {
    const inputClientID = document.querySelector('#client-id');
    const clientIDparent = inputClientID.parentElement.parentElement;
    const clientIDkeyboard = clientIDparent.nextElementSibling;
    const errorMsg = document.querySelectorAll('.error-msg')[0];
    const btnChangeID = document.querySelector('.change-id');
    const inputPassword = document.querySelector('#password');
    const submitButton = document.querySelector('button[type="submit"]');
    const homePageURL = '/EfiCampProject1/index.html';

    const loginInputs = [inputClientID, inputPassword];

    btnChangeID.addEventListener('click',(e)=>{
        e.preventDefault();
        clientIDparent.classList.remove('hide');
        clientIDkeyboard.classList.remove('hide');
        btnChangeID.parentElement.classList.add('hide');
        inputClientID.focus();
    }, false);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputPassword.value.length) {
            let inputLoginVal = inputClientID.value;
            let inputPasswordVal = inputPassword.value;
            $.ajax({
                type: 'post',
                data: {
                    login: inputLoginVal,
                    password: inputPasswordVal
                },
                url: 'https://efigence-camp.herokuapp.com/api/login',
                error: (response) => {
                    inputClientID.classList.add('error');
                    errorMsg.innerText = response.responseJSON.message;
                    errorMsg.setAttribute('aria-expanded', true);
                    errorMsg.focus();
                    console.log(response);
                },
                success: () => {
                    window.location.href = homePageURL;
                }
            });


        } else {
            inputPassword.classList.add('error');
            inputPassword.nextElementSibling.setAttribute('aria-expanded', true);
            inputPassword.nextElementSibling.focus();
        }
    }, false);

    loginInputs.forEach(function(input) {
        input.addEventListener('focus', (e) => {
            e.target.classList.remove('error');
            e.target.nextElementSibling.setAttribute('aria-expanded', false);
        }, false);
    });
})();
