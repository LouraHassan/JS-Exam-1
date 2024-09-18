let link = 'https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn';

let name1 = document.getElementById('name')
let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let SignUpBtn = document.getElementById('SignUpBtn')
let warningAll = document.getElementById('all-hint');
let warningName = document.getElementById('name-hint');
let warningUsername = document.getElementById('username-hint');
let warningEmail = document.getElementById('email-hint');
let warningPassword = document.getElementById('password-hint')
SignUpBtn.addEventListener('click', () => {
    if (name1.value == '' || userName.value == '' || email.value == '' || password.value == '') {
        warningAll.classList.remove('none')
        
    } else if (name1.value.length < 3) {
        warningName.classList.add('redText')
    } else if (!checkCapital(userName.value)) {
        warningUsername.classList.add('redText')
    } else if (!validEmail(email.value)) {
        warningEmail.classList.add('redText')
    } else if (password.value.length < 4) {
        warningPassword.classList.add('redText')
    } else {
        checkEmail(email.value).then(isFound => {
            if (isFound) {
                warningAll.textContent = "Account already exists"
                warningAll.classList.remove('none')

            } else {
                fetch(link, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        name: name1.value,
                        userName: userName.value,
                        email: email.value,
                        password: password.value
                    })
                }).then(res => res.json()).then(data => {
                    console.log('Account created');
                    let savedName = userName.value;
                    localStorage.setItem('userName', savedName)
                    console.log(localStorage.getItem('userName'));
                    window.location.href = 'login.html'
                })
            }
        })
    }


})

function checkEmail(email) {
    return fetch(link).then(res => res.json()).then(users => {
        let isFound = users.find(user => user.email == email)
        return isFound
    })
}

function checkCapital(text) {
    return /[A-Z]/.test(text)
}

function validEmail(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
}

