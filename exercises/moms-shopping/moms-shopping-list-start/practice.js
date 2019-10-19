// write a function takes a string and checks if palindrome

function palindrome(string) {
  let revString = string.toLowerCase().split('').reverse().join('');
  if (revString === string.toLowerCase()) {
    return 'thats a palindrome';
  } else {
    return 'not a palindrome';
  }
}

console.log(palindrome('racecar'));