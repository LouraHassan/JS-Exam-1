let userName = localStorage.getItem('userName')
let showName = document.getElementById('showName')
let weatherCard = document.getElementById('weatherCard')
let preyerCard = document.getElementById('preyerCard')
showName.textContent = userName
console.log(userName);

preyerCard.addEventListener('click', () => {
    window.location.href = "preyer.html"
})
weatherCard.addEventListener('click', () => {
    window.location.href = "weather.html"
})
