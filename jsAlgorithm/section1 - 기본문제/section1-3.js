//연필 한다스는 12자루. 학생 1인당 연필 1자루씩 나눠줌.
//N명의 학생수 => 필요한 다스 수 계산하는 프로그램.

// 1 <= N <= 1000
const N = 178
function solution(N) {
  let answer = Math.ceil(N/12);
  return answer;
}

console.log(solution(N));

//Math.ceil(), Math.round(), Math.floor() 알기