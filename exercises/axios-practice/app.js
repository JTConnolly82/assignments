let axios = require('axios');

axios.get('https://swapi.co/api/people/2').then((response)=>{
  console.log(response.data.name + ' is a starwars character!');
});