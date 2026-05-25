const apiUrl = 
"https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m";

const weatherTable = document.getElementById(
    "weatherData"
) as HTMLTableSectionElement;

async function getWeatherData() {
    try {

        const respone = await fetch(apiUrl);

        const data = await respone.json();

        const times = data.hourly.time;
        const temperature = data.hourly.temperature_2m;

        for (let i = 0; i < times.length; i++) {


            const row = `
                <tr>
                    <td>${times[i]}</td>
                    <td>${temperature[i]}  C</td>
                </tr>
                `;
        
         weatherTable.innerHTML += row;
        }
    } catch(eror) {
        console.log("Terajadi kesalahan", eror);
    }
}

getWeatherData();