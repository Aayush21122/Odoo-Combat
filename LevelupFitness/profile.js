function goToGenderPage() {
  window.location.href = 'gender.html';
 
}
var Gender
var Age
var Height
var Weight
var Fitness
function selectGender(gender) {
  console.log("Selected gender: " + gender);
  Gender=gender
  // male = document.getElementById('male')
  // female = document.getElementById('female')
  // // const element = document.getElementById()
  // if (male.classList.contains('active')){
  //   male.classList.remove('active')
  //   female.classList.add('active')
  // }
  // else{
  //   female.classList.remove('active')
  //   male.classList.add('active')
  // }
  
 
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
  Age=age
  Weight=weight
  Height=height
});


function selectFitness(fitness) {
  console.log("Selected gender: " + fitness);
}
function goToUsermodel() {
  window.location.href = 'usermodel.html';
}

function goToTimePeriod() {
  window.location.href = 'timeperiod.html';
}


document.getElementById('experienceForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const experience = document.querySelector('input[name="gymExperience"]:checked').value;

  
  if (experience === 'yes') {
    window.location.href = 'timeperiod.html';
  } else {
    window.location.href = 'profile.html';
  }
});


document.getElementById('timePeriodForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const months = document.getElementById('months').value;

  
  console.log('Number of months:', months);

  
  window.location.href = 'profile.html';
});

const measurement={
  'gender':Gender,
  'age':Age,
  'weight':Weight,
  'height':Height,
  'fitness':Fitness
}
module.export=measurement