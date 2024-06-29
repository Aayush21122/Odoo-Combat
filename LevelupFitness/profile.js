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
  window.location.href = 'fitness.html';
}


function selectFitness(fitness) {
  console.log("Selected gender: " + fitness);
}
function goToUsermodel() {
  window.location.href = 'usermodel.html';
}

function goToTimePeriod() {
  
  
    window.location.href = 'timeperiod.html';
  
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
