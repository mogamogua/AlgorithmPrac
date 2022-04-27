//대문자 영단어 입력 -> 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력
let string = 'BANANA';

function solution(string) {
  return string.replace(/(\A)/g, '#');
} 

console.log(solution(string));

function solution2(string) {
  return [...string].map((alphabet) => (alphabet === 'A' ? alphabet = '#' : alphabet)).join('')
}

console.log(solution2(string), 2);


function solution3(string) {
  let answer = ''
  for (let str of string) {
    if (str === 'A') {
      answer += 'A'
    } else {
      answer += str;
    }
  }
  return answer;
}

console.log(solution3(string), 3);