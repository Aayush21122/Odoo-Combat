function goToGenderPage() {
  window.location.href = 'gender.html';
}

function selectGender(gender) {
  console.log("Selected gender: " + gender);
}

function goToMeasureStep() {
  window.location.href = 'measurement.html';
}
function goToFitnessStep() {
  window.location.href = 'fitness.html';
}

document.getElementById('measurementsForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  console.log('Age:', age);
  console.log('Weight:', weight);
  console.log('Height:', height);

});