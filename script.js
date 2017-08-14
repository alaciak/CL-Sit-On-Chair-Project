document.addEventListener("DOMContentLoaded", function(e) {

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

  // DROPDOWN - CHAIR COMPONENT

  var selectArrows = document.querySelectorAll(".list-arrow");
  var chairType = document.querySelector('#chair-type');
  var chairColor = document.querySelector('#chair-color');
  var chairMaterial = document.querySelector('#chair-material');
  var listLabels = document.querySelectorAll('.list-label');

  var chairTypeChosen = document.querySelector('.type');
  var chairColorChosen = document.querySelector('.color');
  var chairMaterialChosen = document.querySelector('.pattern');
  var transportCheckbox = document.querySelector('#transport');
  var transportChosen = document.querySelector('.transport');

  var chairTypeCost = document.querySelector('.type.value');
  var chairColorCost = document.querySelector('.color.value');
  var chairMaterialCost = document.querySelector('.pattern.value');
  var transportCost = document.querySelector('.transport.value');
  var totalCost = document.querySelector('.sum');

  var chairImages = document.querySelectorAll('.image-part img');

  var chairTypePrice = 0;
  var chairMaterialPrice = 0;
  var chairColorPrice = 0;
  var chairTransportPrice = 0;
  var totalPrice = 0;

  selectArrows[0].addEventListener('click', toggleChairTypes);
  selectArrows[1].addEventListener('click', toggleChairColors);
  selectArrows[2].addEventListener('click', toggleChairMaterials);


  chairType.style.display = 'none';
  chairColor.style.display = 'none';
  chairMaterial.style.display = 'none';
  chairImages[0].style.display = 'block';

  function toggleList(listComponent) {
    if (listComponent.style.display === 'none') {
      listComponent.style.display = 'block';
    } else {
      listComponent.style.display = 'none';
    }
  }

  function toggleChairTypes(e) {
    toggleList(chairType);
  }

  function toggleChairColors(e) {
    toggleList(chairColor);
  }

  function toggleChairMaterials(e) {
    toggleList(chairMaterial);
  }

  function toggleChairImages(e) {
    toggleList(chairImages);
  }

  for (var i = 0; i < chairType.children.length; i++) {
    chairType.children[i].addEventListener('click', chooseChairType);
  }

  function chooseChairType(e) {
    listLabels[0].innerHTML = this.innerHTML;
    listLabels[0].classList.add('chair-type-chosen');
    chairType.style.display = 'none';
    chairTypeChosen.innerHTML = this.innerHTML;

    getChairImage();
    getPrice();
    getTotalPrice();
    chairTypeCost.innerHTML = chairTypePrice + ' zł';
    totalCost.innerHTML = totalPrice + ' zł';
  }

  for (i = 0; i < chairColor.children.length; i++) {
    chairColor.children[i].addEventListener('click', chooseChairColor);
  }

  function chooseChairColor(e) {
    listLabels[1].innerHTML = this.innerHTML;
    listLabels[1].classList.add('chair-type-chosen');
    chairColor.style.display = 'none';
    chairColorChosen.innerHTML = this.innerHTML;
    getPrice();
    getTotalPrice();
    chairColorCost.innerHTML = chairColorPrice + ' zł';
    totalCost.innerHTML = totalPrice + ' zł';
  }

  for (i = 0; i < chairMaterial.children.length; i++) {
    chairMaterial.children[i].addEventListener('click', chooseChairMaterial);
  }

  function chooseChairMaterial(e) {
    listLabels[2].innerHTML = this.innerHTML;
    listLabels[2].classList.add('chair-type-chosen');
    chairMaterial.style.display = 'none';
    chairMaterialChosen.innerHTML = this.innerHTML;
    getPrice();
    getTotalPrice();
    chairMaterialCost.innerHTML = chairMaterialPrice + ' zł';
    totalCost.innerHTML = totalPrice + ' zł';
  }

  transportCheckbox.addEventListener('click', chooseTransport);

  function chooseTransport(e) {
    if (this.checked === true) {
      chairTransportPrice = 200;
      transportCost.innerHTML = chairTransportPrice + ' zł';
      transportChosen.innerHTML = 'Transport';
    } else {
      chairTransportPrice = 0;
      transportCost.innerHTML = '';
      transportChosen.innerHTML = '';
    }
    getPrice();
    getTotalPrice();
    totalCost.innerHTML = totalPrice + ' zł';
  }

  // CALCULATOR - CHAIR COMPONENT

  function getChairImage() {
    switch (listLabels[0].innerHTML) {
      case 'Chair Clair':
        chairImages[0].style.display = 'block';
        chairImages[1].style.display = 'none';
        chairImages[2].style.display = 'none';
        break;
      case 'Chair Margarita':
        chairImages[0].style.display = 'none';
        chairImages[1].style.display = 'block';
        chairImages[2].style.display = 'none';
        break;
      case 'Chair Selena':
        chairImages[0].style.display = 'none';
        chairImages[1].style.display = 'none';
        chairImages[2].style.display = 'block';
        break;
    }
  }

  function getPrice() {

    switch (listLabels[0].innerHTML) {
      case 'Chair Clair':
        chairTypePrice = 500;
        break;
      case 'Chair Margarita':
        chairTypePrice = 450;
        break;
      case 'Chair Selena':
        chairTypePrice = 600;
        break;
    }
    switch (listLabels[1].innerHTML) {
      case 'Czerwony':
        chairColorPrice = 50;
        break;
      case 'Czarny':
        chairColorPrice = 0;
        break;
      case 'Pomarańczowy':
        chairColorPrice = 100;
        break;
    }

    switch (listLabels[2].innerHTML) {
      case 'Tkanina':
        chairMaterialPrice = 0;
        break;
      case 'Skóra':
        chairMaterialPrice = 300;
        break;
    }
  }

  function getTotalPrice() {
    totalPrice = chairTypePrice + chairColorPrice + chairMaterialPrice + chairTransportPrice;
  }

});
