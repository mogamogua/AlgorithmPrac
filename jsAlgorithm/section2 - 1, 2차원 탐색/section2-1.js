//1<=N<=100개의 정수를 입력
// 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램
// (첫번째수는 무조건 출력)

function solution (array) {
  for (let index in array) {
    if (index == 0) { //for in 은 string ..
      console.log(array[0])
      continue;
    } else if (array[index] > array[index-1]) {
      console.log(array[index]);
    }
  }  
}

const array = [6, 7, 3, 9, 5, 6, 12]
solution(array);

//filter 메소드 사용
function solution2 (array) {
  const answerArr = array.filter((num, index) => (
    num > array[index-1]
  ))
  answerArr.unshift(array[0])
  return answerArr
}
console.log(solution2(array), 'filter');

//해답

function solution3 (array) {
  const answer = [];
  answer.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i-1]) answer.push(array[i]);
  }
  return answer;
}

console.log(solution3(array), 'array');