var str = 'hello my name is albert';

function removeAlbert(s) {
  split = s.split(' ');
  let spliced = split.splice(0, 4);
  spliced.push('John');
  return spliced;
}

console.log(removeAlbert(str));