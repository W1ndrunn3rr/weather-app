import {API} from "./API";
import {UI}  from "./ui"
export function searchHandler(api,ui) {
    let form = document.querySelector("form")
    let input = document.querySelector("input")
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        api.getData(input.value).then(
            data => ui.generateContent(data))
    });
}