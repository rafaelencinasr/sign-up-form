console.log("Hello world");

let inputPasswordValue;
let confirmInputPasswordValue;

const passwordInput = document.querySelector('#userPassword');

passwordInput.addEventListener('focusout', ()=>{
    inputPasswordValue = document.getElementById('userPassword').value;
    if(inputPasswordValue!=''){
        checkPassword();
    }
    else{
        confirmPasswordInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("correcto");
        passwordInput.classList.remove("correcto");
    }
});



const confirmPasswordInput = document.querySelector('#userPasswordConfirm');

confirmPasswordInput.addEventListener('focusout', ()=>{
    confirmInputPasswordValue = document.getElementById('userPasswordConfirm').value;
    if(confirmInputPasswordValue!=''){
        checkPassword();
    }
    else{
        confirmPasswordInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("correcto");
        passwordInput.classList.remove("correcto");
        matchedPasswords.textContent='';
    }
});

function checkPassword(){
    if(inputPasswordValue==confirmInputPasswordValue){
        console.log("Same password");
        confirmPasswordInput.classList.remove("error");
        passwordInput.classList.remove("error");

        confirmPasswordInput.classList.add("correcto");
        passwordInput.classList.add("correcto");
        matchedPasswords.textContent='';
    }
    else{
        console.log("Diff passwords");
        confirmPasswordInput.classList.add("error");
        passwordInput.classList.add("error");

        confirmPasswordInput.classList.remove("correcto");
        passwordInput.classList.remove("correcto");
        matchedPasswords.textContent='* Passwords do not match';
    }
};

const matchedPasswords = document.getElementById('matchedPasswords')

