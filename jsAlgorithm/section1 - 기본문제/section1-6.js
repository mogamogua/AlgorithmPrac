//7개의 자연수가 주어짐. 이들 중 홀수인 자연수를 골라서 그 합을 구하고,
//고르홀수들 중 최솟값을 찾는 프로그램.

//출력 : 합과 최솟값

let num = [12, 77, 38, 41, 53, 92, 85];
function solution (num) {
  //홀수고르기
  const odd = num.filter(num => (num % 2) !== 0);
  const sum = odd.reduce((acc, curr) => acc+curr);
  const min = odd.reduce((acc, curr) => acc<curr?acc:curr);

  console.log(sum, min);
}

solution(num);


//답
function solution2(num) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i=0; i<num.length; i++) {
    if (num[i]%2 !== 0) {
      sum += num[i];
      if (min > num[i]) {
        min = num[i]
      }
    }
  }
  console.log(sum, min);
}

solution2(num);