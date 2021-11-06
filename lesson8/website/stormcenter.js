function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


  function check_Alpha(letters){
    let regex = /[a-zA-Z]{5,30}/;
    if (regex.test(letters.fname.value) == false){
      alert("Your full name should have more than 5 characters and only letters");
      console.log("It worked")
      letters.fname.focus();
      return false;
    }
    if(letters.fname.value == " "){
      alert("Name Field cannot be left empty");
      letters.fname.focus();
      return false;
    }
    return true;
  }