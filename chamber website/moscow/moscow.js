// Last modified
if (Date.parse(document.lastModified) != 0)
document.write(document.lastModified);
document.getElementById("timePassed").innerHTML=document.lastModified;  

//Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    }
    
// Events
var mscEvent = 'msc-events.json';
fetch(mscEvent)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing

const company = jsonObject['msc-events'];
company.forEach((company) => {

let card = document.createElement('section');

let date = document.createElement ('h3');
date.innerHTML=`${company.date}`;
card.appendChild(date);

let event = document.createElement ('p');
event.innerHTML=`${company.event}`;
card.appendChild(event);

let location = document.createElement ('p');
location.innerHTML=`📍 ${company.location}`;
card.appendChild(location);


document.querySelector('section.msc-events').appendChild(card);
});
})