//선택정렬

//N개의 숫자가 입력되면 오름차순 정렬하여 출력하는 프로그램 작성.
//선택정렬로.

//입력
//첫 줄에 1이상 100이하의 자연수 N
//두번 째 줄에 N개의 자연수가 배열으로 입력됨

//선택정렬은 최솟값을 가장앞으로 두고 고정시켜 n-i개에서 최솟값을 비교해서 순차적으로 고정시키는 방식.
//최댓값을 맨 뒤로 넘겨도됨
const N = 6
const numbers = [13, 5, 11, 7, 23, 15];

function selectionSort(N, numbers) {
  for (let i=0; i<N; i++) {
    let sorting = numbers.slice(i); 
    let min = sorting[0], minIdx = 0;
    //최솟값 찾기.
    for (let j=0; j<sorting.length; j++) {
      if (sorting[j] < min) {
        min = sorting[j], minIdx = j;
      }
    }
    //정렬 영역의 최솟값이 구해지면 swap한다.
    [numbers[i], numbers[minIdx+i]] = [numbers[minIdx+i], numbers[i]];
    console.log(numbers, i)
  }
  console.log(numbers);
}

selectionSort(N, numbers);