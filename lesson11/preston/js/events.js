const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        towns.forEach((town) => {

            if (['Preston'].includes(town.name)){
               
                let card = document.createElement('section');
               
                let h2 = document.createElement('h2');
                h2.innerHTML=`${'Upcoming events:'}`;
                card.appendChild(h2);

                let events = document.createElement ('p');
                events.innerHTML = `${town.events}`;
                card.appendChild(events);

                document.querySelector('section').appendChild(card)
            };
        })
    })