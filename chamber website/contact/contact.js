// Last modified
if (Date.parse(document.lastModified) != 0)
document.write(document.lastModified);
document.getElementById("timePassed").innerHTML=document.lastModified;  

//Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    }