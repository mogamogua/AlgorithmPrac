//버블정렬

//N개의 수가 입력되면 오름차순으로 버블정렬하여 출력하기

const numbers = [13, 5, 11, 7, 23, 15];
function bubbleSort(numbers) {
  let swap = false;
  for (let turn = 0; turn<numbers.length-1; turn++) {
    for (let i = 0; i<numbers.length-1; i++) {
      if (numbers[i] > numbers[i+1]) {
        [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]; //swap한다.
        swap = true;
        console.log(numbers)
      }
    }
    if (!swap) return numbers;
  }
  return numbers;
}

console.log(bubbleSort(numbers));