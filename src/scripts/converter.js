export function converter() {
    return {
        milesToKilometers(miles) {
            return (miles * 1.609344).toFixed(1);
        },

        kilometersToMiles(kilometers) {
            return Math.round(kilometers / 1.609344).toFixed(1);
        },

        fahrenheitToCelcius(fahrenheit) {
            return ((fahrenheit - 32) / 1.8).toFixed(1)
        }
    }
}