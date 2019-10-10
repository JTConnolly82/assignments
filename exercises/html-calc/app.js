const addForm = document.additionForm;

addForm.addEventListener('submit', function() {
  event.preventDefault();
  const firstAdd = addForm.addFirst.value;
  const secondAdd = addForm.addSecond.value;

  document.getElementById('addResult').textContent = `${Number(firstAdd) + Number(secondAdd)}`;
})

const subForm = document.subtractionForm;

subForm.addEventListener('submit', function() {
  event.preventDefault();
  const firstSub = subForm.subFirst.value;
  const secondSub = subForm.subSecond.value;

  document.getElementById('subRes').textContent =  `${Number(firstSub) - Number(secondSub)}`;

})

const multForm = document.multiplyForm;

multForm.addEventListener('submit', function() {
  event.preventDefault();
  const firstMult = multForm.multFirst.value;
  const secondMult = multForm.multSecond.value;

  document.getElementById('multRes').textContent = `${Number(firstMult)*Number(secondMult)}`;
});