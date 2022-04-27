//공통원소 구하기

//a, b 두개의 집합이 주어지면 두 집합의 공통 원소를 추출해서
//오름차순으로 출력

//a집합의 크기 1 <= N <= 30000
//b집합의 크기 1 <= M <= 30000
//각 집합의 원소는 10억이하.

function getCommonElem(N, M, A, B) {
  let answer = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i] === B[j]) answer.push(A[i]);
    }
  }
  return answer.sort((a,b) => a - b)
}

const N = 5, M = 5;
const A = [1,3,9,5,2];
const B = [3, 2, 5, 7, 8];

console.log(getCommonElem(N, M, A, B));

//정렬 먼저하고 투포인터 사용하는 것이 시간복잡도가 더 작다.
function solution(N, M, A, B) {
  A.sort((a,b) => a - b);
  B.sort((a,b) => a - b);
  let answer = []
  let i = 0, j = 0;
  while (i<N && j<M) {
    if (A[i] === B[j]) answer.push(B[j++]);
    else if (A[i] < B[j]) i++;
    else j++; 
  }
  return answer;
}

console.log(solution(N, M, A, B));