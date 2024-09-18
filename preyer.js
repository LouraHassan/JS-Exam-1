let link = " https://api.aladhan.com/v1/gToH/18-09-2024"
let link2 = "https://api.aladhan.com/v1/timingsByAddress/18-09-2024?address=Riyadh,KSA&method=8"
let dateDiv = document.getElementById('date-div')
let timeCards = document.getElementById('time-cards')
fetch(link).then(res => res.json()).then(data => {
    console.log(data.data);
    
    let card1 = document.createElement('div')
    card1.classList.add('date-card')
    let title1 = document.createElement('p')
    let hdate = document.createElement('h4')
    let hday = document.createElement('h4')

    title1.textContent = 'Hijri Date'
    hdate.textContent = data.data.hijri.date
    hday.textContent = data.data.hijri.weekday.ar

    card1.appendChild(title1)
    card1.appendChild(hdate)
    card1.appendChild(hday)

    
    let card2 = document.createElement('div')
    card2.classList.add('date-card')
    let title2 = document.createElement('p')
    let mdate = document.createElement('h4')
    let mday = document.createElement('p')
    
    title2.textContent = 'Gregorian Date'
    mdate.textContent = data.data.gregorian.date
    mday.textContent = data.data.gregorian.weekday.en
    
    card2.appendChild(title2)
    card2.appendChild(mdate)
    card2.appendChild(mday)
    
    dateDiv.appendChild(card2)
    dateDiv.appendChild(card1)
    
})

fetch(link2).then(res => res.json()).then(data => {
    let timings = data.data.timings;
    console.log(timings);
    
        let preyerCard = document.createElement('div')
        let Ftitle = document.createElement('p')
    let time1 = document.createElement('h4')
    
    Ftitle.textContent = 'Fajr'
    time1.textContent = timings.Fajr

    preyerCard.appendChild(Ftitle)
    preyerCard.appendChild(time1)
    timeCards.appendChild(preyerCard)

let preyerCard2 = document.createElement('div')
let Dtitle = document.createElement('p')
let time3 = document.createElement('h4')

Dtitle.textContent = 'Dhuhr'
time3.textContent = timings.Dhuhr

preyerCard2.appendChild(Dtitle)
preyerCard2.appendChild(time3)
timeCards.appendChild(preyerCard2)

let preyerCard3 = document.createElement('div')
let Atitle = document.createElement('p')
let time4 = document.createElement('h4')

Atitle.textContent = 'Asr'
time4.textContent = timings.Asr

preyerCard3.appendChild(Atitle)
preyerCard3.appendChild(time4)
timeCards.appendChild(preyerCard3)

let preyerCard4 = document.createElement('div')
let mtitle = document.createElement('p')
let time5 = document.createElement('h4')

mtitle.textContent = 'Maghrib'
time5.textContent = timings.Maghrib

preyerCard4.appendChild(mtitle)
preyerCard4.appendChild(time5)
timeCards.appendChild(preyerCard4)

    let preyerCard1 = document.createElement('div')
    
let sutitle = document.createElement('p')
let time2 = document.createElement('h4')

sutitle.textContent = 'Isha'
time2.textContent = timings.Isha

preyerCard1.appendChild(sutitle)
preyerCard1.appendChild(time2)
timeCards.appendChild(preyerCard1)

// let preyerCard = document.createElement('div')
// let Ftitle = document.createElement('p')
// let time1 = document.createElement('h4')

// Ftitle.textContent = 'Fajr'
// time1.textContent = timings.Fajr

// preyerCard.appendChild(Ftitle)
// preyerCard.appendChild(time1)
// timeCards.appendChild(preyerCard)

// let preyerCard = document.createElement('div')
// let Ftitle = document.createElement('p')
// let time1 = document.createElement('h4')

// Ftitle.textContent = 'Fajr'
// time1.textContent = timings.Fajr

// preyerCard.appendChild(Ftitle)
// preyerCard.appendChild(time1)
// timeCards.appendChild(preyerCard)


    
})