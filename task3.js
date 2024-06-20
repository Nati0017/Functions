export function ageCalculator(year, month, day) {
  const hoy = new Date(); 
  const cumpleaños = new Date ( year, month , day); 
  const age = hoy.getFullYear() - cumpleaños.getFullYear() 
  const diferenciaMes= hoy.getMonth - cumpleaños.getMonth(); 

  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < cumpleaños.getDate() ) )
  age-- 
  return age 
}

const year = 2000;
const month = 4;
const day = 23;
const age = ageCalculator(year, month, day);
console.log("Age:", age);