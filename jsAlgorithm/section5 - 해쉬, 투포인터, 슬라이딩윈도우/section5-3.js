//연속 부분수열1

//N개로 이루어진 수열 입력.
// 이 수열 에서 연속 부분 수열의 합이 M이 되는 경우가 몇번인가
//만약 N = 8, M = 6이고 수열 = 1 2 1 3 1 1 1 2
//=> [2, 1, 3], [1,3,1,1], [3,1,1,1]로 3가지.

//1<=N<=100000, 1<=M<100,000,000(1억)
//수열 원소값은 1000을 넘지않는 자연수.
//N = arr.length, M 부분수열의 합이 되어야하는 수

function countSequenceSum(N, M, arr) {
  let answer = []
  
  let start = 0;
  while (start < N) {
    let countSum = 0;
    for (let i = start; i < N; i++) {
      countSum += arr[i]
      if (countSum === M) {
        answer.push(arr.slice(start, i+1))
        break;
      } else if (countSum > M) {
        break;
      }
    }
    start++;
  }
  console.log(answer.length)
}

const N = 8, M = 6;
const arr = [1, 2,1,3,1,1,1,2];

countSequenceSum(N, M, arr);