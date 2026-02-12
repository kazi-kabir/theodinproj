console.log('hello')

let temperature = document.getElementById('temperature');
let weatherLocation = document.getElementById('location');

async function getWeatherData() {
    const res = await fetch('http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no', 
    {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
    });
    
    const data = await res.json();
    
    console.log(data);

    weatherLocation.innerHTML = data['location']['name']
    temperature.innerHTML = data['current']['temp_c']
    
}

getWeatherData();
