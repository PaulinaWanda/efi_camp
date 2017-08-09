// $(document).foundation();
(()=>{
    const inputPassword = document.querySelector('#password');
    const submitButton = document.querySelector('button[type="submit"]');
    const homePageURL = '/EfiCampProject1/index.html';

    submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
        if (inputPassword.value.length) {
            window.location.href = homePageURL;
        } else {
            inputPassword.classList.add('error');
        }
    }, false);

    inputPassword.addEventListener('focus', (e)=>{
        e.target.classList.remove('error');
    },false);

})();