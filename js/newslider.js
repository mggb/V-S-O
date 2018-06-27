
var contain = document.querySelector('.containerQuestionAndAnswer2');
var arrowLeft = document.querySelector('.left');
var arrowright = document.querySelector('.right')
var numberquestion = document.querySelector('.numberQuestion')
var u =2;
var o = 1;

arrowLeft.addEventListener('click',function () {
  if (o===7) {
    o = 6
    u=7
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
  var containAnsAndValue = document.querySelectorAll('.ContainerAnswerAndValue');

  for (var i = 0; i < textNext.length; i++) {
    if (textNext[i].textContent === " undefined ") {
      containAnsAndValue[i].innerHTML = '';
  }

  }
  o++
  u++
});
arrowright.addEventListener('click',function () {

  o--
  u--
  if (o=== -1) {
    o = 0
    u=1
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
