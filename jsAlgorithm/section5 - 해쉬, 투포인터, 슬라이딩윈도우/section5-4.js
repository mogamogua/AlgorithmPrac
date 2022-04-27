//연속 부분수열2

//N개의 수로 이루어진 수열 입력
//연속 부분 수열의 합이 특정숫자 M이하가 되는 경우가 몇 번있는지 구하기
//N = 5, M = 5이고 수열이 1 3 1 2 3이라면
//합이 5 이하가 되는 연속부분수열은 다음과 같이 열 가지이다.
//[1] [3], [1], [2], [3], [1,3] [3, 1] [1, 2] [2, 3], [1,3,1]


//1 <= N <= 100,000 1<=M<=100,000,000
//수열의 원소 값은 1000을 넘지않는 자연수.

function countSumLessThan(N, M, arr) {
  let answer = [];
  for (let length = 1; length <= N; length++) {
    for (let index = 0; index + length <= N; index++) {
      const subArr = arr.slice(index, index+length);
      if (subArr.reduce((acc,curr) => (acc + curr)) <= M) answer.push(subArr);
    }
  }
  return answer;
}

const N = 5, M = 5;
const arr = [1, 3, 1, 2, 3];

// console.log(countSumLessThan(N, M, arr))


//left = 0, right = 0일 때 [1] => 1개
//[1,3,1,2,3] left = 0, right = 1까지 갔을때 5이하. 
//=> 부분수열은 3개이지만 2개만 카운팅 ([1]은 이전에 카운팅 함)
// left = 0, right = 2일 때 => 6개지만 3개만 카운팅.
// => 이렇게 부분배열의길이만큼 카운팅해서 더한다.


function solution(M, arr) {
  let answer = 0, sum = 0, left = 0;
  for (let right=0; right<arr.length; right++) {
    sum += arr[right];
    while (sum > M) {
      sum -= arr[left++] //sum에서 맨 왼쪽 요소르 빼고, 인덱스를 옮긴다.
    } //sum이 M이하가 될 때까지 왼쪽 인덱스를 옮긴다.
    answer += (right - left + 1) //부분수열의 길이만큼 카운팅.
  }
  return answer;
}

console.log(solution(M, arr))