function solve(input, criteria) {
  let inputNew = JSON.parse(input);
  let [key, value] = criteria.split('-');
  if (key != 'all') {
    inputNew = inputNew.filter(x => x[key] == value)
  } 
 
   for (let i = 0; i < inputNew.length; i++) {
     let currentEmplye = inputNew[i];
     console.log(`${i}. ${currentEmplye.first_name} ${currentEmplye.last_name} - ${currentEmplye.email}`);
     
   }
  
}



solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  'gender-Female');
