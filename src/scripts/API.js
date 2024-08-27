export class API {

    async #getJSON(cityName) {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&contentType=json&unitGroup=us&locationMode=single&key=38K8PL373VAT7XJW6ACTEELYJ&locations=${encodeURIComponent(
                cityName
            )}`
        );
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    
    async getData(cityName) {
        try {
            const data = await this.#getJSON(cityName);
            if (data.location.currentConditions.icon === undefined)
                throw new Error("Icon not found.");
            return {
                city: data.location.name,
                conditions: data.location.values[0].conditions,
                humidity: data.location.values[0].humidity,
                temp: data.location.values[0].temp,
                maxTemp: data.location.values[0].maxt,
                minTemp: data.location.values[0].mint,
                visibility: data.location.values[0].visibility,
                icon: data.location.currentConditions.icon,
            };
        } catch (error) {
            return null;
        }
    }
}
