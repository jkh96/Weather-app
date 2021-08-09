import {getWeather} from './weatherApi'

export function btnSetup() {
    const searchBtn = document.querySelector('.bi-search')
    searchBtn.addEventListener('click', displayinfo)
}


export async function displayinfo() {
let data = await getWeather()
let mainContainer = document.querySelector('main')

const h1 = document.createElement('h1')
const temp = document.createElement('p')
const feelLikes = document.createElement('p')
const humidity = document.createElement('p')
const description = document.createElement('p')

h1.innerText = data.name
temp.innerText = `The temperature is ${data.main.temp}`
feelLikes.innerText = `The weather outside feels like ${data.main.feels_like}`
humidity.innerText = `Humidity: ${data.main.humidity}%`
description.innerText = `We have ${data.weather[0].description} today`

mainContainer.appendChild(h1)
mainContainer.appendChild(temp)
mainContainer.appendChild(feelLikes)
mainContainer.appendChild(humidity)
mainContainer.appendChild(description)
}