//최대 매출

//N일 동안의 매출 기록.
//연속된 k일 동안의 최대 매출액이 얼마인지 구하기

//5<=N<=100,000, 2<=K<=N가 주어진다.

function getLargestSalesBetween(N ,K, sales) {
  let max = 0;
  for (let i = 0; i + K < N; i++) {
    sum = 0;
    for (let j = i; j < i+K; j++ ) {
      sum += sales[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}
const N = 10, K = 3; 
const sales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
// console.log(getLargestSalesBetween(N, K, sales))



function solution(K, sales) {
  let answer, sum = 0;
  //0~k-1인덱스의 요소를 넣어둔다.
  for (let i = 0; i<K; i++) sum += sales[i];
  answer = sum;

  for (let i = K; i < sales.length; i++) {
    //오른쪽으로 한 칸 이동한 K개의 배열의 합 구하기.
    sum +=(sales[i]-sales[i-K]);
    answer = Math.max(answer, sum);
  }
  return answer;
}


console.log(solution(K, sales));