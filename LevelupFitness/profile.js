function goToGenderPage() {
  window.location.href = 'gender.html';
 
}
var Gender
var Age
var Height
var Weight
var Fitness
var Experience
var Months=0
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
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  console.log('Age:', age);
  console.log('Weight:', weight);
  console.log('Height:', height);
  Age=age
  Weight=weight
  Height=height
  window.location.href = 'fitness.html';
}


function selectFitness(fitness) {
  console.log("Selected gender: " + fitness);
}
function goToUsermodel() {
  window.location.href = 'usermodel.html';
}

function goToTimePeriod() {
  const experience = document.querySelector('input[name="gymExperience"]:checked').value;
  Experience=experience
  
  if (experience === 'yes') {
    window.location.href = 'timeperiod.html';
  } else {
    window.location.href = 'home.html';
  }
}


function getmonth(){
  const months = document.getElementById('months').value;

  
  console.log('Number of months:', months);

  Months=months
  window.location.href = 'profile.html';
}



const measurement={
  'gender':Gender,
  'age':Age,
  'weight':Weight,
  'height':Height,
  'fitness':Fitness,
  'expericence':Experience,
  'months':Months
}
