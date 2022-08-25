function menuFunction(){
    document.getElementById('index') .style = 'width: 50%';
    document.getElementById('menuContext') .style = 'display: block';
}

function deleteFunction(){
    document.getElementById('index') .style = 'widht: 0px';
    document.getElementById('menuContext') .style = 'display: none';
}

document.querySelector('.menuBtn') .onclick = function(){
    document.getElementById('index') .style = 'width: 50%';
    document.getElementById('menuContext') .style = 'display: block';
}

document.querySelector('.mainBody') .onclick = function(){
    document.getElementById('index') .style = 'widht: 0px';
    document.getElementById('menuContext') .style = 'display: none';
}

//slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}