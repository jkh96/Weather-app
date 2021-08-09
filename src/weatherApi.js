import { displayinfo } from "./display"

let apikey = "2dac6ab794e0c5e0f41f4f72547878ab"


export async function getWeather() {
    let result = document.querySelector('.search-input').value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result},US&&units=imperial&appid=${apikey}`)
    const data = await response.json()
    console.log( await data);
    return await data
}

