import {cardBody} from './cardBody.js';

let code = "";//+=does not replace the card (like the = sign does), but adds a card
const card = document.querySelector(".cards");

cardBody.forEach(function (result) {
( code += `
    <section class="card">
    <header class="card-header">${result.header}</header>
        <img src="${result.picture}" alt="${result.card}" title="${result.title}" width="94" height="142">
            <div class="cardText">
                <h2 class="title">${result.title}</h2>
                <p class="text">${result.text}</p>
                <p class="genre">${result.genre}</p>
            </div>
    </section>
    `);
});

card.innerHTML = code;