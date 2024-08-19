const movement = [200, -495, -100, 500, 890, 900, 1200];

const euroToUsd = 1.1;
 //using map method

 const movementToUsd = movement.map(mov => 
   mov * euroToUsd
 
)
console.log(movement);
console.log(movementToUsd);
// using for loop
const movementUSDfor = [];
for(const mov of movement) {
  movementUSDfor.push(mov * euroToUsd);
}
console.log(movementUSDfor);

const movementDescription = movement.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  }
  else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
  }
});
console.log(movementDescription);

const movementDescription2 = movement.map((mov,i) => `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`)

console.log(movementDescription2);

const account1= {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
}
const account2= {
  owner: 'Jessica Davis',
  movements: [2000, 4050, -4400, 40, -6500, -13000, 700, 10300],
  interestRate: 1.6,
  pin: 2222,
}
const account3= {
  owner: 'Steven Thomas William',
  movements: [120, 435, -440, 350, -655, 1350, 7070, 1350],
  interestRate: 0.7,
  pin: 3333,
}
const account4= {
  owner: 'Sarah Smith',
  movements: [2060, 4450, 400, 300, 650, 130, -70, 13500],
  interestRate: 1,
  pin: 4444,
}
const accounts= [account1, account2, account3, account4]

const user = 'Jonas John Smith';
const username= user.toLowerCase().split(" ").map(name => name[0]).join('')
;
console.log(username);


const createusername = accs => accs.forEach(acc => {
  acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join('')
;
})
createusername(accounts);
console.log(accounts)

// Filter Method
const deposits = movement.filter(function(mov)
{
  return mov > 0
});
console.log(movement);
console.log(deposits);

const withdrawal = movement.filter(function(mov){
  return mov < 0
}
);
console.log(withdrawal)