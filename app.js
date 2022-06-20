const subscribeForm = document.querySelector('.subscribe-form');
const formInput = document.querySelector('#subscribe');
const button = document.querySelector('button');
const error = document.querySelector('.error');

subscribeForm.addEventListener('submit', (e) => {

    let emailString = formInput.value;
    const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{1,3})+$/;

    function validate(emailString) {
      return emailRegex.test(emailString);
    }

    if(!validate(emailString)) {
       e.preventDefault();
       error.classList.add('active');
       error.innerText = "Please provide a valid email address";
       formInput.classList.add('active');
    }

    if (emailString === '' || emailString === null) {
        e.preventDefault();
        error.classList.add('active');
        error.innerText = "Whoops! It looks like you forgot to add your email"
        formInput.classList.add('active');
    }
})