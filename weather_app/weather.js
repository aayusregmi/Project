const base_url = "https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=8df2b3cdebea1ed4c0a71a5b249792aa&units=metric";
const input = document.querySelector(".input");
const btn = document.querySelector(".search-btn");
const temp_txt = document.querySelector(".temp")
const wind_value = document.querySelector(".wind-value");
const humidity_value = document.querySelector(".humidity-value");
const dynamic_image = document.querySelector(".dynam-img");
const card = document.querySelector(".card");
let newsrc;
//<---------------------||-------------------------------->
   (async function (){
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + "kathmandu" + "&appid=8df2b3cdebea1ed4c0a71a5b249792aa&units=metric"
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    dynamic_image.classList.remove("hide");
    console.log(data);
    temp_txt.innerText = `Temperature: ${data.main.temp}°C`;
    humidity_value.innerText = `${data.main.humidity}`;
    wind_value.innerText = `${(data.wind["speed"]*3.6).toFixed(1)} km/hr`;
    if(data.weather[0].main === "Clear"){
        newsrc = `/Project/weather_app/images/clear.png`;
        dynamic_image.src = newsrc;
    }else if(data.weather[0].main === "Clouds"){
        newsrc = `/Project/weather_app/images/clouds.png`;
        dynamic_image.src = newsrc;
    }else if(data.weather[0].main === "Rain"){
        newsrc = `/Project/weather_app/images/rain.png`;
        dynamic_image.src = newsrc;
    }else if(data.weather[0].main === "Snow"){
        newsrc = `/Project/weather_app/images/snow.png`;
        dynamic_image.src = newsrc;
    }})();

//<--------------------//--------------------------------->
btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault();
    let city_name = input.value;
    console.log(city_name);
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=8df2b3cdebea1ed4c0a71a5b249792aa&units=metric"
    try {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    dynamic_image.classList.remove("hide");
    temp_txt.innerText = `Temperature: ${data.main.temp}°C`;
    humidity_value.innerText = `${data.main.humidity}`;
    wind_value.innerText = `${(data.wind["speed"]*3.6).toFixed(1)} km/hr`;
    let weather = data.weather[0].main ;
    if(weather === "Clear"){
        newsrc = `/Project/weather_app/images/clear.png`;
        dynamic_image.src = newsrc;
    }else if(weather === "Clouds"){
        newsrc = `/Project/weather_app/images/clouds.png`;
        dynamic_image.src = newsrc;
    }else if(weather=== "Rain"){
        newsrc = `/Project/weather_app/images/rain.png`;
        dynamic_image.src = newsrc;
        card.style = "background: linear-gradient(35deg , #3b3b3b 40% , blue);"

    }else if(weather === "Snow"){
        newsrc = `/Project/weather_app/images/snow.png`;
        dynamic_image.src = newsrc;
    }
    } catch (error) {
        dynamic_image.classList.add("hide");
        temp_txt.innerText = "City Not Found :<"
        humidity_value.innerText = `_`;
        wind_value.innerText = `_`;
    }
    
})