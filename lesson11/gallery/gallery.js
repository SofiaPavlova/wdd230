function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
  }
  
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
	
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

let timePassed = 0;
const currDate = new Date();
if (localStorage.getItem("prevDate")) {
  const currTime = currDate.getTime();
  const prevDate = new Date(localStorage.getItem("prevDate"));
  const prevTime = prevDate.getTime();
  timePassed = Math.round((currTime - prevTime) / (1000 * 3600 * 24));
  localStorage.setItem("prevDate", currDate.toString());
} else {
  timePassed = 0;
  localStorage.setItem("prevDate", currDate.toString());
}
document.getElementById("timePassed").innerHTML=timePassed;