document.addEventListener("DOMContentLoaded", function(e) {


// DROPDOWN MENU

var menuButton = document.querySelector('.main-menu');
var dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('mouseover', showMenu);
dropdownMenu.style.display = 'none';

function showMenu(e) {
  if(dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  }
  else {
    dropdownMenu.style.display = 'none';
  }
}

// IMAGES SLIDER

var arrowNext = document.querySelector('.arrow-right');
var arrowPrev = document.querySelector('.arrow-left');

var listElements = document.querySelectorAll('.img-chair li');

  var imageIndex = 0;

  listElements[imageIndex].classList.add('visible');

  arrowNext.addEventListener('click', showNext);
  arrowPrev.addEventListener('click', showPrevious);

  function showNext(e) {

    listElements[imageIndex].classList.remove('visible');
    imageIndex++;
    if (imageIndex >= listElements.length) {
      imageIndex = 0;
    }

    listElements[imageIndex].classList.add('visible');
  }


  function showPrevious(e) {

    listElements[imageIndex].classList.remove('visible');
    imageIndex--;

    if (imageIndex < 0) {
      imageIndex = listElements.length - 1;
    }
    listElements[imageIndex].classList.add('visible');
  }

});
