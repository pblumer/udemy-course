const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;


function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "His name is " +
    userName +
    " and he is " +
    userAge +
    " old. Does he has hobbies? " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
