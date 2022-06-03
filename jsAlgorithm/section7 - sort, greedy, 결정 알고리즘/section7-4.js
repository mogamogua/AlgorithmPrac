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

function solution(size, arr) {
  let answer = Array.from({length: size}, () => 0); //주어진 메모리 크기만큼 배열을 만들고 0으로 채운다.
  arr.forEach(x => {
    let pos = -1; //position
    for (let i=0; i<size; i++) {
      if (x ===answer[i]) pos = i; //메모리에 들어있는 작업 중 일치하는 것의 index를 찾는다.
    }
    if (pos === -1) {
      //일치하는 작업이 없다면 miss
      for (let i=size-1; i>=1; i--) {
        answer[i] = answer[i-1];
      }
    }
  })
} 

