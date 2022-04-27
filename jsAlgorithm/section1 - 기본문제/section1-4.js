//자연수 N이 입력되면 1부터 N까지 합을 출력하는 프로그램

const N = 6;
const M = 10;
const solution = (N) => {
  console.log(N*(N+1)/2);
}

solution(N)
solution(M)


const solution2 = (N) => {
  let answer = 0;
  for (let i = 1; i<= N; i++) {
    answer += i
  }
  return answer;
}
