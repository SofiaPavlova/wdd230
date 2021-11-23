const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];
        towns.forEach((town) => {

            if (['Soda Springs','Fish Haven','Preston'].includes(town.name)){
               
                let card = document.createElement('section');
               
                let h2 = document.createElement('h2');
                h2.innerHTML=`${town.name}`;
                card.appendChild(h2);
                
                let image = document.createElement('img');
                image.setAttribute('src', 'images/town/' + town.photo);
                card.appendChild(image);

                let yearFounded = document.createElement ('p');
                yearFounded.innerHTML = `Year Founded: ${town.yearFounded}`;
                card.appendChild(yearFounded);

                let population = document.createElement('p');
                population.innerHTML = `Population: ${town.population}`;
                card.appendChild(population);

                let averageRainfall = document.createElement('p');
                averageRainfall.innerHTML = `Average Rainfall: ${town.averageRainfall}`;
                card.appendChild(averageRainfall);

                

                document.querySelector('section').appendChild(card)
            };
        })
    })