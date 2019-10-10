var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


// function returnsString(arr) {
//   return arr.join(" ").toString();
// }

// console.log('lyric string -->' + returnsString(lyrics));

// function flipItAndReverseIt(arr) {
//   let revArr = arr.reverse();
//   return revArr.join(" ").toString();
// }

// console.log('reversed --> ' + flipItAndReverseIt(lyrics));

// function everyOther(arr) {
//   let pushedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       pushedArr.push(arr[i]);
//     }
//   }
//   return pushedArr.join(" ");
// }

// console.log('every other word --> ' + everyOther(lyrics));


// Fourth function: returns all of lyrics, but every two words are switched

// function switchEveryOther(arr) {
//   console.log(arr);
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       newArr.push(arr[i + 1]);
//     } else {
//       newArr.push(arr[i - 1]);
//     }
//   }
//   return newArr;
// }

// console.log('every other switched --> ' + switchEveryOther(lyrics));

// var lyrics = ["This", "hit", "that", "ice", "cold", 
//               "Michelle", "Pfeiffer", "that", "white", 
//               "gold", "This", "one", "for", "them", 
//               "hood", "girls", "Them", "good", "girls", 
//               "straight", "masterpieces", "Stylin'", 
//               "whilen'", "livin'", "it", "up", "in", 
//               "the", "city", "Got", "Chucks", "on", 
//               "with", "Saint", "Laurent", "Gotta", "kiss", 
//               "myself", "I'm", "so", "pretty"];




function randomOrder(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let randy = Math.random() * arr.length; 
    roundRand = Math.round(randy);
    newArr.push(arr[roundRand]);
  }
  return newArr;
}

console.log('random order --> ' + randomOrder(lyrics))


function randNum() {
  let randy = Math.random(11) * 10;
  return Math.round(randy);
}

console.log(randNum());
