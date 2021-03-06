const requestURL = "";

function cardView() {
    fetch(requestURL)
        .then(function (response) {
            return response.json();

        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const companies = jsonObject['companies'];
            for (let i = 0; i < companies.length; i++) {
                let card = document.createElement('section');
                let title = document.createElement('h2');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let website = document.createElement('p');
                let image = document.createElement('img');

                title.textContent = companies[i].name;
                address.textContent = companies[i].address;
                phone.textContent = companies[i].phone;
                website.textContent = companies[i].website

                card.appendChild(title);
                card.appendChild(image);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);


                image.setAttribute('src', companies[i].imageurl);
                title.setAttribute('class', 'title-dir');
                image.setAttribute('class', 'img-dir');



                document.querySelector('div.cards').appendChild(card);


            };
        });
}
function listView() {
    fetch(requestURL)
        .then(function (response) {
            return response.json();

        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const companies = jsonObject['companies'];
            for (let i = 0; i < companies.length; i++) {
                let card = document.createElement('section');
                let title = document.createElement('h2');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let website = document.createElement('p');


                title.textContent = companies[i].name;
                address.textContent = companies[i].address;
                phone.textContent = companies[i].phone;
                website.textContent = companies[i].website

                card.appendChild(title);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);

                title.setAttribute('class', 'title-dir');

                document.querySelector('div.cards').appendChild(card);

            };
        });
}

let buttonList = document.getElementById("sList");
let buttonGrid = document.getElementById("sGrid");

buttonGrid.addEventListener('click', cardView);
buttonList.addEventListener('click', listView);
