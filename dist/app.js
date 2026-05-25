"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m";
const weatherTable = document.getElementById("weatherData");
function getWeatherData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respone = yield fetch(apiUrl);
            const data = yield respone.json();
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
        }
        catch (eror) {
            console.log("Terajadi kesalahan", eror);
        }
    });
}
getWeatherData();
