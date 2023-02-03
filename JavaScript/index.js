function fetchData() {
    storedLoc = search_input.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${storedLoc}&appid=5b4bee0ba241d092159faf007e166080`).then((weather) => weather.json())
      .then((weather) => displayData(weather));
  }
  function displayData(data) {
    place = data.name;
    icon = data.weather[0].icon;
  
    condition = data.weather[0].main;
    tempChange = data.main.feels_like;
    temp = data.main.temp;
    wind = data.wind.speed;
    humid = data.main.humidity;
    visible = data.visibility;
    pressure = data.main.pressure;
    console.log(visible, pressure);
    temp = Math.round(temp - 273.15);
    tempChange = Math.round(tempChange - 273.15);
   
  
    country_name.innerHTML = `${place}`
    visibility.innerHTML = `${visible}`
    press.innerHTML = `${pressure}`
    hum.innerHTML = `${humid}`
    win.innerHTML = `${wind}`
    temper.innerHTML = `${temp}°c`
    clouds.innerHTML = `${condition}`
    win.innerHTML = `${wind}`
    
  }