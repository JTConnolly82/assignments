let sentance = `Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.`


// Create a function that accepts the pirate's inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.



// Return the new array with a count of every time the word was repeated.
// Sort the array by count.
// Return a list of all repeats containing 3 or more characters.



function moreThanOne(string) {
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(arr[i].length -1)  === '.' || arr[i].charAt(arr[i].length - 1 === ',')) {
      console.log(arr[i]);
    }
  }
}

moreThanOne(sentance);