let link = 'https://66e7e69cb17821a9d9da6ec1.mockapi.io/logIn';

let userName = document.getElementById('username');
let password = document.getElementById('password');
let warningUsername = document.getElementById('username-hint');
let warningAll = document.getElementById('all-hint');
let warningPassword = document.getElementById('password-hint')

let LoginBtn = document.getElementById('LoginBtn')

LoginBtn.addEventListener('click', () => {
    if (userName.value == '' || password.value == '') {
        warningAll.classList.remove('none')
    } else {
        checkUser(userName.value).then(isFound => {
            if (!isFound) {
                warningAll.textContent = 'Account not found'
                warningAll.classList.remove('none')
            } else {
                fetch(link).then(res => res.json()).then(users => {
                    let user = users.find(user => user.userName == userName.value)
                    if (password.value != user.password) {
                        warningPassword.classList.remove('none')
                    } else {
                        console.log('logged in');
                        let savedName = userName.value;
                        localStorage.setItem('userName', savedName)
                        console.log(localStorage.getItem('userName'));
                        window.location.href = 'home.html'
                    }
                })
            }
        })
    }

})


function checkUser(username) {
    return fetch(link).then(res => res.json()).then(users => {
        let isFound = users.find(user => user.userName == username)
        return isFound
    })
}