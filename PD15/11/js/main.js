function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

let arr = [1,5,2,4,7,5];
shuffle(arr);
console.log(arr);