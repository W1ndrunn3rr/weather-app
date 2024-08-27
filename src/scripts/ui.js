import {converter} from "./converter";

export class UI {
    #weatherDiv = document.querySelector("#weather-ui");
    #dataAttributes = [];
    #weatherMap = {
        "clear-day": "sunny",
        "clear-night": "bedtime",
        rain: "rainy",
        snow: "snowy",
        sleet: "hail",
        wind: "air",
        fog: "foggy",
        cloudy: "cloud",
        "partly-cloudy-day": "partly_cloudy_day",
        "partly-cloudy-night": "nights_stay",
        thunderstorm: "thunderstorm",
        tornado: "near_me",
        hail: "weather_hail",
        hurricane: "hurricane",
        default: "help_outline",
    };

    generateContent(jsonData) {
        if (jsonData == null) return;
        this.#dataAttributes = [
            `<h1>${jsonData.city}</h1>`,
            `${jsonData.conditions} ${converter().fahrenheitToCelcius(
                jsonData.temp
            )}&degC`,
            `${this.#weatherMap[jsonData.icon]}`,
            ``,
            `Humidity`,
            `${jsonData.humidity}%`,
            `Max temperature`,
            `${converter().fahrenheitToCelcius(jsonData.maxTemp)}&degC`,
            `Min temperature`,
            `${converter().fahrenheitToCelcius(jsonData.minTemp)}&degC`,
            `Visibility`,
            `${converter().milesToKilometers(jsonData.visibility)} km`,
        ];

        // Clear existing elements except the first three
        while (this.#weatherDiv.childNodes.length > 3)
            this.#weatherDiv.removeChild(this.#weatherDiv.lastChild);

        // Iterate over the data attributes and create new elements
        this.#dataAttributes.forEach((item, counter) => {
            let newElement;

            if (item === this.#weatherMap[jsonData.icon]) {
                newElement = document.createElement("div");
                newElement.innerText = item;
                newElement.classList.add("material-symbols-outlined", "weather-icon", "ui-header", "ui-element-1");
            } else {
                newElement = document.createElement("div");
                counter === 0 || counter === 1
                    ? newElement.classList.add("ui-header")
                    : newElement.classList.add("ui-element-1");
                counter > 1 && counter % 2 === 0
                    ? newElement.classList.add("ui-element-1")
                    : newElement.classList.add("ui-element-2");
                newElement.innerHTML = item;
            }

            // Apply fade-in class for animation
            newElement.classList.add("fade-in");

            // Append new element to weatherDiv
            this.#weatherDiv.appendChild(newElement);

            // Trigger animation by adding the 'show' class after a slight delay
            setTimeout(() => newElement.classList.add("show"), 100 * counter + 1); // delay increases with each item
        });
    }
}