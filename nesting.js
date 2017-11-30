// =========================
// NESTING 
// =========================

// === PROBLEM 1 ===========

var employees = [{
  "firstName": "Von",
  "lastName": "Budibent",
  "email": "vbudibent0@163.com",
  "department": "Sales"
}, {
  "firstName": "Catherina",
  "lastName": "Swalowe",
  "email": "cswalowe1@example.com",
  "department": "Engineering"
}, {
  "firstName": "Theo",
  "lastName": "Trill",
  "email": "ttrill2@sina.com.cn",
  "department": "Services"
}, {
  "firstName": "Elsy",
  "lastName": "McCrorie",
  "email": "emccrorie3@netscape.com",
  "department": "Legal"
}, {
  "firstName": "Lorie",
  "lastName": "Handsheart",
  "email": "lhandsheart4@fotki.com",
  "department": "Research and Development"
}]

// Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
//  1. If employee's first name is Theo, remove that employee because he just got fired.
//  2. If the employee's first name is Lorie, change her department to 'HR'.
//  3. Return the updated employee array.

              /* vvv-Code Is Broken-vvv */
function employeeUpdater() {   //create function employeeUpdater.
  for (var i = 0; i < employees; i++) { //loop through employees.
    var obj = employees[i];    // declare var for new object from loop.
    for (var prop in obj) {     // loop through object.
      if(obj[prop] === "Theo") {  // check object for match to 'Theo'.
        employees.splice(i,1)     // remove 'Theo' from object.
      }
      if(obj[prop] === "Lorie") {   // check object for match to 'Lorie'.
        obj['department'] = 'HR'   //change value of "department: 'Research adnd Development'" to "department: 'HR'".
      }
    }
  }
  return employees
}
             /* ^^^-Code Is Broken-^^^ */



// === PROBLEM 2 ==========


// The array below represents IDs tied to reported workplace accidents. An employee accidentally entered in 
//duplicates to array, making it look as though there are more accidents this year than there actually are. 
// 1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the 
//workplaceAccidents array.
// 2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
// 3. Return the updated array.

var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];

/* vvv-Code Here-vvv */
function removeDuplicates(arr){ //create function removeDuplicates
    for (var i = 0; i < arr.length; i++){  // first loop iteration using "var i"
      for(var j = i + 1; j < arr.length; j++){ // second loop iteration using "var j = i+1"
        if(arr[i] === arr[j]){    // comparing iterations "i" and "j"
          arr.splice(i, 1);        //remove duplicates 
          i--
          
        }
      }
      
    }
    return arr;                   //return results
}
/* ^^^-Code Here-^^^ */


// === PROBLEM 3 ==========

var cat = {
  name: 'Fluffy',
  catFriends: [{
    name: 'Grumpy',
    activities: ['be grumpy', 'eat food']
  }, {
    name: 'Lazy Bones',
    activities: ['sleep', 'pre-sleep naps']
    }]
}

// Fluffy has two friends, Grumpy and Lazy Bones. 
// 1. Assign the value of Grumpy's 2nd activity to the variable below.
// 2. Assign fluffy2ndFriend the name of Fluffy's 2nd friend.

// Code here

var grumpyActivity = cat.catFriends[0].activities[1]; // give grumpyActivity value of 'eat food.'
var fluffy2ndFriend = cat.catFriends[1].name;         // give fluffy2ndFriend name value of 'Lazy Bones'.







// === PROBLEM 4 ==========

// Below is some information about my car. As you can see, I am not the best driver. 
//I have caused a few accidents. Please update this driving record so that I can feel better 
//about my driving skills.

// 1. Write a function called recordCleaner.
// 2. Loop over the accidents array.
// 3. Change atFaultForAccident from true to false.

var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true
    },{
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true
    },{
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true
    }
  ]
}

    /* vvv-Code Here-vvv */
var recordCleaner = () => {         // create function recordCleaner.
	for(var key in myCar){              // loop through object.
	if(key === 'accidents'){          //match key to 'accidents'.
		 for(var i = 0; i < myCar.accidents.length; i++){  //loop through accidents key.
		 	myCar.accidents[i].atFaultForAccident = false; // change atFaultForAccident from 'true' to 'false'.
		 }
		}
	}
	return myCar              //return all changes to object
}


      /* ^^^-Code Here-^^^ */





// === PROBLEM 5 ==========

// Below is an array of arrays. Use two for loops.
// 1. Write a function called 'looper'. 
// 2. 'looper' should loop over the arrays. 
// 3. If the number is odd, replace it with 'odd'.
//    If the number is even, replace it with 'even'.
// 4. Return the modified numsArr.

var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];

      /* vvv-Code Is Broken-vvv */
      function looper(){
        for(i = 0; i < numsArr.length; i++){
          for(j = 1; j < numsArr.length; j++){
            if( numsArr[i][j]%2===0){
              numsArr[i][j]="even";
            }
            else if(!numsArr[i][j]%2===0){
              numsArr[i][j]="odd";
            }
          }
        }
        console.log(numsArr);
      };

        /* ^^^-Code Is Broken-^^^ */