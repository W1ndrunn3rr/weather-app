import {API} from './scripts/API'
import "./home/style.css"
import {UI} from "./scripts/ui";
import {searchHandler} from "./scripts/searchHandler";

let ui = new UI();
let api = new API();

addEventListener("load", e => {
    api.getData("Warsaw").then(
        data => ui.generateContent(data))
})

searchHandler(api, ui);


