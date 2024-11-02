const row = document.querySelector(".row");

fetch('getData.php')
.then(response => response.json())
.then(baza => {
    console.log(baza);

    baza.forEach((el) =>{
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.setProperty("width", "18rem");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        let cardTitleText = document.createTextNode(`Imie i nazwisko: ${el.imie} ${el.nazwisko}`);
        cardTitle.appendChild(cardTitleText);
        
        let cardSubtitle = document.createElement("h6");
        cardSubtitle.classList.add("card-subtitle");
        cardSubtitle.classList.add("mb-2");
        cardSubtitle.classList.add("text-body-secondary");
        let cardSubtitleText = document.createTextNode(`Id: ${el.idPracownika}`);
        cardSubtitle.appendChild(cardSubtitleText);

        let cardTextStanowiskoP = document.createElement("p");
        cardTextStanowiskoP.classList.add("card-text");
        let cardTextStanowisko = document.createTextNode(`Stanowisko: ${el.stanowisko}`);
        cardTextStanowiskoP.appendChild(cardTextStanowisko);

        let cardTextTelefonP = document.createElement("p");
        cardTextTelefonP.classList.add("card-text");
        let cardTextTelefon = document.createTextNode(`Tel.: ${el.telefon}`);
        cardTextTelefonP.appendChild(cardTextTelefon);

        cardBody.insertAdjacentElement("beforeend", cardTitle);
        cardBody.insertAdjacentElement("beforeend", cardSubtitle);
        cardBody.insertAdjacentElement("beforeend", cardTextStanowiskoP);
        cardBody.insertAdjacentElement("beforeend", cardTextTelefonP);

        card.insertAdjacentElement("beforeend", cardBody);

        row.insertAdjacentElement("beforeend", card);
    });

})
.catch(error => console.error('Błąd:', error));