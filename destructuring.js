// ========================
// DESTRUCTURING
// ========================

// Use object destructuring to save the property values from the object carDetails into new variables. 

var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}

  /* vvv-Code Here-vvv */

var {color, make, model, year} = carDetails;  // save property values from object to new variables.

  /* ^^^-Code Here-^^^ */
// ========================


// In the function below named greeting, it is receiving an object as a parameter. 
//Use object destructuring to save the object properties to new variables. 
//The property names are firstName, lastName, and title. Return the concatenated string.

function greeting( obj ) {
   /* vvv-Code Here-vvv */

  var {title, firstName, lastName} = obj; // save property values from a given parameter object to new variable.

    /* ^^^-Code Here-^^^ */

  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
}


// ========================


// Write a function called totalPopulation that will take in an object. That object will have 4 properties named utah, california, texas and arizona. The property values will be numbers. Use object destructuring to save the property values to new variables. Sum up the values and return the total number.

    /* vvv-Code Here-vvv*/

    function totalPopulation(obj){  //create function that takes in an object as a parameter.
      var {utah, california, texas, arizona} = obj;   //assign the 4 properties to new variable.
      return utah + california + texas + arizona;   // return concatenated properties
    }


    /* ^^^-Code Here-^^^ */



// ========================


// Write a function called ingredients that will take in an object. This object will have 3 properties named carb, fat, and protein. The property values will be strings. Use object destructuring to save the property values to new variables. Push these new variables to an array and return the array. 

     /* vvv-Code Here-vvv */
    
     function ingredients(obj){  //create function that takes in an object parameter.
      var arr = [];              // create empty array to hold object properties.
      var {carb, fat, protein} = obj;  // save object propertirs to variable.
      arr.push(carb, fat, protein);  // push properties into empty array.
      return arr;                    // return array with new values.
    }


    /* ^^^-Code Here-^^^ */


// ========================


// Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration. See the example below:

// function example( {one, two, three} ) {
//   return one + two + three
// }

// Write a function called largeNumbers that will take a destructured object as it's parameter. 
//The object properties will be named first, second, and third and their values will be numbers. 
//Find the smallest number of the three and return that number.

     /* vvv-Code Here-vvv */
    


    /* ^^^-Code Here-^^^ */


// ========================


// Write a function called numberGroups that will take a destructured object as it's parameter. 
//The object properties will be named a, b, and c and their values will be arrays of numbers. 
//Find the longest array and return that array. 

     /* vvv-Code Is Broken-vvv */

     function numberGroups({a, b, c}){
      if(a.length > b.length && c.length){ // compare array a length to b & c length.
          return a;
        }
      if(b.length > a.length && c.length){// compare array b length to a & c length.
          return b;
        
      }
      if(c.length > a.length && b.length){// compare array c length to a & b length.
          return c;
        
      }
    }

    /* ^^^-Code Is Broken-^^^ */
