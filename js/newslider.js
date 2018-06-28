var contain = document.querySelector('.containerQuestionAndAnswer2');
var contain2 = document.querySelector('.containerQuestionAndAnswer')

var numberquestion = document.querySelector('.numberQuestion')
var start = document.querySelector('.start')
var pop = 0;



start.addEventListener('click', function() {
  var u = 1;
  var o = 0;
  numberquestion.innerHTML = '';
  numberquestion.innerHTML += `
  <p class="textQuestion">question ${u}/7</p>
  `
  for (var i = 0; i < planette.length; i++) {

    console.log(planette[o]);
    contain2.innerHTML = '';
    contain2.innerHTML += `
    <div class="containerQuestionAndAnswer2">
    <div class="containerQuestion">
      <p class="Question">${planette[o].question}</p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[0]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[1]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[2]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[3]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[4]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[5]} </p>
    </div>
    </div>
    <div class="containerArrow">
      <div class="containerimgArrow right"><img src="image/fleche-gauche.png" alt="arrowleft"></div>
      <div class="containerimgArrow left"><img src="image/fleche-droite.png" alt="arrowright"></div>
    </div>
    `;
    var textNext = document.querySelectorAll('.textNextCheckbox');
    var containAnsAndValue = document.querySelectorAll('.ContainerAnswerAndValue');
    for (var i = 0; i < textNext.length; i++) {
      if (textNext[i].textContent === " undefined ") {
        containAnsAndValue[i].innerHTML = '';
      }
    }
  }



  var arrowLeft = document.querySelector('.left');
  var arrowright = document.querySelector('.right');
  var u = 2;
  var o = 1;
  var stock = [];
  var containerARROw = document.querySelector('.containerArrow')
  var contain = document.querySelector('.containerQuestionAndAnswer2');
  function find() {

    if (stock.length === 7 ) {
      numberquestion.innerHTML = '';
      numberquestion.innerHTML += `
    <p class="textQuestion">voila votre planette</p>
    `
    contain.innerHTML = '';
    contain.innerHTML += `
    <div class="col-xs-12 col-md-11 col-lg-11">
      <h1 class="detailplanete-container-title pricinpal">felicitation</h1>
      <p class="textFind">Venez vite decouvrir la planette qui vous corespond, Ne perdez plus de temps <br> changer de vie</p>
      <button  class="finishBUtuttonFind"type="button" name="button">voir la fiche</button>
    </div>
  `;
  containerARROw.style.display ='none;'
    }
  }

  arrowLeft.addEventListener('click', function() {
    var choice = document.querySelectorAll('.checkboxChoice');
    if (o === 7) {
      o = 6
      u = 7
    }
    var choice = document.querySelectorAll('.checkboxChoice');
    for (let i = 0; i < choice.length; i++) {
      if (choice[i].checked) {
        stock.push(choice[i].value)
        console.log(choice[i].value)
        console.log(stock);
      }
    }

    numberquestion.innerHTML = '';
    numberquestion.innerHTML += `
  <p class="textQuestion">question ${u}/7</p>
  `
    for (var i = 0; i < planette.length; i++) {
      contain.innerHTML = '';
      contain.innerHTML += `
    <div class="containerQuestion">
      <p class="Question">${planette[o].question}</p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[0]}">
      <p class="textNextCheckbox"> ${planette[o].answers[0]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[1]}">
      <p class="textNextCheckbox"> ${planette[o].answers[1]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[2]}">
      <p class="textNextCheckbox"> ${planette[o].answers[2]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[3]}">
      <p class="textNextCheckbox"> ${planette[o].answers[3]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[4]}">
      <p class="textNextCheckbox"> ${planette[o].answers[4]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="${planette[o].answers[5]}">
      <p class="textNextCheckbox"> ${planette[o].answers[5]} </p>
    </div>
    `;
    }
    var textNext = document.querySelectorAll('.textNextCheckbox');
    var containAnsAndValue = document.querySelectorAll('.ContainerAnswerAndValue');

    for (var i = 0; i < textNext.length; i++) {
      if (textNext[i].textContent === " undefined ") {
        containAnsAndValue[i].innerHTML = '';
      }
    }
    o++
    u++
    find()
  });
  arrowright.addEventListener('click', function() {
    o--
    u--
    if (o === -1) {
      o = 0
      u = 1
    }
    numberquestion.innerHTML = '';
    numberquestion.innerHTML += `
  <p class="textQuestion">question ${u}/7</p>
  `
    for (var i = 0; i < planette.length; i++) {
      contain.innerHTML = '';
      contain.innerHTML += `
    <div class="containerQuestion">
      <p class="Question">${planette[o].question}</p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[0]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[1]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[2]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[3]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[4]} </p>
    </div>
    <div class="ContainerAnswerAndValue">
      <input class="checkboxChoice" type="radio" name="vehicle" value="">
      <p class="textNextCheckbox"> ${planette[o].answers[5]} </p>
    </div>
    `;
    }
    var textNext = document.querySelectorAll('.textNextCheckbox');
    var containAnsAndValue = document.querySelectorAll('.ContainerAnswerAndValue')

    for (var i = 0; i < textNext.length; i++) {
      if (textNext[i].textContent === " undefined ") {
        containAnsAndValue[i].innerHTML = '';
      }
    }
  })
  find();
});
