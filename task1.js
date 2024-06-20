export function costCalculator(transactionAmount) {
 const fee = 3; 
 const interestRate = 0.01; 

 const interestAmount = transactionAmount * interestRate

const costoTotal = transactionAmount + fee + interestAmount;

 return costoTotal
}