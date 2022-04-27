// 문자열 입력, 특정 문자 입력 => 문자열에 특정 문자가 몇 개 존재하는지 알아내기
//문자열의 길이는 100이하
// let string = 'COMPUTERPROGRAMMING'
// let character = 'R'
let string = 'jisusihyeongbaboSS'
let character = 's'

function solution(string, character) {
  let regex = new RegExp(character, "g");
  return string.match(regex).length;
}

console.log(solution(string, character));


function solution2(string, character) {
  let count = 0;
  for (let i of string) {
    if (i === character) {
      count++
    }
  }
  return count;
}

console.log(solution2(string, character), 'for문 알고리즘' );