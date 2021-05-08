function solve(steps,meters,kmh){

const speed = kmh*1000/3600;
const distance = steps*meters;

let rest =Math.floor(distance/500)*60;

let time =distance/speed+rest;
const hour = Math.floor(time/3600).toFixed(0).padStart(2,'0');
const minutes = Math.floor((time-hour*3600)/60).toFixed(0).padStart(2,'0');
const seconds = Math.round((time-minutes*60)).toFixed(0).padStart(2,'0');


 return`${hour}:${minutes}:${seconds}`;
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));

