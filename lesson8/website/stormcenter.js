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
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(letters.fname.value) == false){
   alert("Name must be in alphabets only and minimun 5");
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