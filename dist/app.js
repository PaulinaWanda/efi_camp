'use strict';

// $(document).foundation();
(function () {
    var inputPassword = document.querySelector('#password');
    var submitButton = document.querySelector('button[type="submit"]');
    var homePageURL = '/EfiCampProject1/index.html';

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (inputPassword.value.length) {
            window.location.href = homePageURL;
        } else {
            inputPassword.classList.add('error');
        }
    }, false);

    inputPassword.addEventListener('focus', function (e) {
        e.target.classList.remove('error');
    }, false);
})();