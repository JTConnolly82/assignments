const lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


//    First function: returns contents of the array, lyrics, to the 
//    console as a string, including necessary spaces.

function arrToString(arr) {
    return arr.join(' ');  
}

console.log('arr to string --->  ' + arrToString(lyrics));

// Second function: returns lyrics backwards 
// ("pretty so I'm myself kiss Gotta...").

function reverse(arr) {
  return arr.reverse().join(' ');
}

console.log('reversed ---->  ' + reverse(lyrics));

// Third function: returns a string of just 
// every other word, (e.g. "this that cold Pfeiffer...").

function everyOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i + 1]);
  }
  return newArr;
}

console.log('every other word --->   ' + everyOther(lyrics));


// Fourth function: returns all of lyrics, but every two 
// words are switched ( "hit This ice that Michelle cold...").

