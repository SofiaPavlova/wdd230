var jsonFile = 'directory.json';
fetch(jsonFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const company = jsonObject['items'];
    company.forEach((company) => {

    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.innerHTML=`${company.name}`;
    card.appendChild(h2);

    let image = document.createElement ('img');
    image.setAttribute("src", company.imageurl);
    card.appendChild(image);

    let phonen = document.createElement ('p');
    phonen.innerHTML=`${company.phone}`;
    card.appendChild(phonen);

    let web = document.createElement ('p');
    web.innerHTML=`${company.web}`;
    card.appendChild(web);

    let address = document.createElement ('p');
    address.innerHTML=`${company.address}`;
    card.appendChild(address);


    document.querySelector('div.items').appendChild(card);
  });
  })

  //list & grid view

  const items = document.querySelector('.items');
  const temp = localStorage.getItem('temp');
  items.dataset.temp = temp;

  document.querySelectorAll('button[data-view]').forEach(item =>{
      item.addEventListener('click', () =>{
          const view = item.dataset.view;
          items.dataset.temp = view;
          localStorage.setItem('temp', view);
      });
  });