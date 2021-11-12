const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {

    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.innerHTML=`${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
    card.appendChild(h2);

    let birthplace = document.createElement ('p');
    birthplace.innerHTML=`Place of birth: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    let birthdate = document.createElement ('p');
    birthdate.innerHTML=`Date of birth: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    let image = document.createElement ('img');
    image.setAttribute("src", prophet.imageurl);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
  });
  })
