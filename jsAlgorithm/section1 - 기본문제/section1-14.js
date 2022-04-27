//N개의 문자열 입력
//그 주 가장 긴 문자열 출력
//첫 줄에 자연수N이 주어짐 3<=N<=30
//두번째 줄부터 N개으 문자열이 주어진다. 문자열의길이는 100이하.


function solution(array) {
  let maxStr = '';
  for (let string of array) {
    if (string.length > maxStr.length) {
      maxStr = string;
    }
  }
  return maxStr;
}

let array = [
  5, 
  "teacher",
  "time",
  "student",
  "beautiful",
  "good"
]

console.log(solution(array))

