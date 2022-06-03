//삽입정렬(Selection sort)

const numbers = [11, 7, 5, 6, 10, 9]

function selectionSort(numbers) {
  for (let i = 1; i<numbers.length; i++) {
    for(let j = i-1; j>=0; j--) {
      //왼쪽으로 가면서 본인보다 작은 수가 나올 때까지 이동한다.
      console.log(j, j+1)
      if (numbers[j] > numbers[j+1]) { //왼쪽이 더 큰 숫자일 때
        [numbers[j], numbers[j+1]] = [numbers[j+1], numbers[j]];
        console.log(numbers)
      } else {
        break;
      } 
    }
  }
  return numbers;
}

console.log(selectionSort(numbers));
