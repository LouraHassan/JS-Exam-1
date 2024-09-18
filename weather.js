let link = "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=07d46a7dbbb103087c48be426a666489"

let city = document.getElementById('city')
let statusDiv = document.getElementById('status')
let weatherCards = document.getElementById('weather-cards')
fetch(link).then(res => res.json()).then(data => {
    console.log(data.main);
    city.textContent = data.name

    let weatherDiv = document.createElement('div')
    let textDiv = document.createElement('div')
    let title = document.createElement('h2')
    title.classList.add('titleStyle')
    let description = document.createElement('h5')
    let tempT = document.createElement('h5')

    let temp = document.createElement('h2')
    title.textContent = data.weather[0].main
    description.textContent = data.weather[0].description
    tempT.textContent = 'Tempreture'
tempT.classList.add('tempStyle')
    temp.textContent = data.main.temp
    textDiv.appendChild(title)
    textDiv.appendChild(description)
    weatherDiv.appendChild(tempT)
    weatherDiv.appendChild(temp)

    statusDiv.appendChild(textDiv)
    statusDiv.appendChild(weatherDiv)


    let div1 = document.createElement('div')
    div1.classList.add('weather-card')
    let feelsLike = document.createElement('h4')
    let feelsLikeT = document.createElement('p')
    feelsLikeT.textContent = 'Feels Like: '

    feelsLike.textContent = data.main.feels_like
    div1.appendChild(feelsLikeT)

    div1.appendChild(feelsLike)
    weatherCards.appendChild(div1)
    let div2 = document.createElement('div')
    div2.classList.add('weather-card')
    let lonT = document.createElement('p')

    let lon = document.createElement('h4')
    lonT.textContent = 'Long: '

    lon.textContent = data.coord.lon
    div2.appendChild(lonT)

    div2.appendChild(lon)
    weatherCards.appendChild(div2)

    let div3 = document.createElement('div')
    div3.classList.add('weather-card')
    let latT = document.createElement('p')

    let lat = document.createElement('h4')
    latT.textContent = 'Lat: '

    lat.textContent = data.coord.lat
    div3.appendChild(latT)
    div3.appendChild(lat)
    weatherCards.appendChild(div3)

    let div5 = document.createElement('div')
    div5.classList.add('weather-card')
    let humidityT = document.createElement('p')

    let humidity = document.createElement('h4')
    humidityT.textContent = 'humidity: '

    humidity.textContent =  data.main.humidity
    div5.appendChild(humidityT)
    div5.appendChild(humidity)

    weatherCards.appendChild(div5)
    

})