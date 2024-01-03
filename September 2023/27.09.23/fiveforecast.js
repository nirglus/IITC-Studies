function fiveDayWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid={API Key}
    `;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const fiveforecast = document.getElementById("forecast");
        const iconUrl = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
        fiveforecast.innerHTML = `<p>Weather at <b>${data.city.name}, ${data.city.country}</b></p>
        <img src = ${iconUrl}>`
        // `<p><b>Date:</b> ${new Date(data.dt)}</p>
        // <p><b>Temperature:</b> ${data.main.temp} °C</p>
        // <p><b>Feels like:</b> ${data.main.feels_like} °C</p>`
        
      })
}
fiveDayWeather("Lod");