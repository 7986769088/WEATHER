const api_key = "fdb824b971d8d6e5bd073d03e3fad43a";
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector(".weather");

const getweather = async(city) =>{
     weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
     return showweather(data)
}
const showweather = (data) =>{
    if(data.cod == "404"){
        weather.innerHTML = `<h2>City not found</h2>`
        return;
    }
    console.log(data)
    weather.innerHTML = 
    `   <div>
          <img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt=""
          />
        </div>
        <div style="display: flex; flex-direction: column">
          <h2>${data.main.temp}℃</h2>
          <h4>${data.weather[0].main}</h4>
        </div>
        <h2 id="wind" style="width: 160px;">wind speed: ${data.wind.speed} Kmh</h2>
      </div>`
}
form.addEventListener("submit",(event)=>{
    getweather(search.value);
    event.preventDefault();

})