const readline = require('readline-sync');

let array = [];

function printArray() {
  console.log(array);
}

function menu() {
  console.log("1 for adding value to the array");
  console.log("2 for printing the array");
  console.log("3 for exiting the program");
  console.log("4 for removing value from the array");

  let input = parseInt(readline.question('Enter choice: '));
  
  let flag = 0;
  while(flag == 0) {
    switch(input) {
      case 1:
        let input2 = parseInt(readline.question('Enter value: '));
        array.push(input2);
        break;
        
      case 2:
        printArray();
        break;
        
      case 3:
        flag = 1;
        console.log('\033c');
        console.log("exiting the program");
        break;
      case 4:
        let number = parseInt(readline.question('Enter number to be deleted: '));
        function deleteNumber(array, number) {
          let index = array.indexOf(number);
          if (index !== -1) {
            array.splice(index, 1);
            console.log(number + " has been deleted from the array.");
          } else {
            console.log(number + " not found in the array.");
          }
        }
        deleteNumber(array, number);
        break;
      default:
        console.log("invalid choice");
        break;
    }
    if (flag == 0) {
      input = parseInt(readline.question('Enter choice: '));
    }
  }
  return;
}

console.log(menu());
