//100이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 출력.
//(정렬을 사용하면 안됨.)
const A = 6;
const B = 5;
const C = 11;
// answer = 5

function solution(A, B, C) {
  return Math.min(A, B, C);
}


function solution2(A,B,C) {
  return [...arguments].reduce((acc, curr) => acc < curr ? acc : curr);
}

function solution3(A,B,C) {
  let answer = 0;
  A < B ? answer = A : answer = B;

  if (C < answer) {
    answer = C;
  }

  return answer;
}
console.log(solution(A, B, C))
console.log(solution2(A, B, C))
console.log(solution3(A, B, C))