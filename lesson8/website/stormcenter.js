function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


  function check_Alpha(letters) {
    //let regex = /[a-zA-Z]{5,30}/;
    let regex = /\d+/;
    if (regex.test(letters.name.value) == true) {
      alert("Your full name should have more than 5 characters and only letters");
      letters.name.focus();
      return false;
    }
  }