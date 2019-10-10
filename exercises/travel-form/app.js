const form = document.theForm;

form.addEventListener('submit', function(e) {
  
  e.preventDefault();


  const firstName = form.firstName.value;
  const lastName = form.lastName.value;

  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);

  const age = form.age.value;
  console.log(`age: ${age}`);


  const theGender = form.gender.value;
  console.log(theGender);


  let locations = form.location;
  const locationArray = [];
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      locationArray.push(locations[i].value);
    }
  }

  console.log(locationArray);
  locations = locationArray.join(' ');


  const dietRestrictions = form.dietinfo;
  const dietArray = [];
  for (let i = 0; i < dietRestrictions.length; i++) {
    if (dietRestrictions[i].checked) {
      dietArray.push(dietRestrictions[i].value);
    }
  }

  console.log(dietArray);
  let diet = dietArray.join(" ");

  alert(`
    Thanks for booking with Aviato...
    Passenger: ${fullName}
    Age: ${age}
    Location(s): ${locations}
    Diet Restriction(s): ${diet}
        `);
  
})