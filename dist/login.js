'use strict';

(function () {
    var inputClientID = document.querySelector('#client-id');
    var clientIDparent = inputClientID.parentElement.parentElement;
    var clientIDkeyboard = clientIDparent.nextElementSibling;
    var errorMsg = document.querySelectorAll('.error-msg')[0];
    var btnChangeID = document.querySelector('.change-id');
    var inputPassword = document.querySelector('#password');
    var submitButton = document.querySelector('button[type="submit"]');
    var mainPageURL = '/efi_camp/mainpage.html';

    var loginInputs = [inputClientID, inputPassword];

    btnChangeID.addEventListener('click', function (e) {
        e.preventDefault();
        clientIDparent.classList.remove('hide');
        clientIDkeyboard.classList.remove('hide');
        btnChangeID.parentElement.classList.add('hide');
        inputClientID.focus();
    }, false);

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (inputPassword.value.length) {
            var inputLoginVal = inputClientID.value;
            var inputPasswordVal = inputPassword.value;
            $.ajax({
                type: 'post',
                data: {
                    login: inputLoginVal,
                    password: inputPasswordVal
                },
                url: 'https://efigence-camp.herokuapp.com/api/login',
                error: function error(response) {
                    inputClientID.classList.add('error');
                    errorMsg.innerText = response.responseJSON.message;
                    errorMsg.setAttribute('aria-expanded', true);
                    errorMsg.focus();
                    console.log(response);
                },
                success: function success() {
                    window.location.href = mainPageURL;
                }
            });
        } else {
            inputPassword.classList.add('error');
            inputPassword.nextElementSibling.setAttribute('aria-expanded', true);
            inputPassword.nextElementSibling.focus();
        }
    }, false);

    loginInputs.forEach(function (input) {
        input.addEventListener('focus', function (e) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.setAttribute('aria-expanded', false);
        }, false);
    });
})();