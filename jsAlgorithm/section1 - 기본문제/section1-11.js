//한 개의 문자열을 입력받고, 해당 문자열에 알파벳 대문자가 몇 개있늕징 ㅏㄹ아내기
//문자열의길이는 100이하

function solution (string) {
  let answer = 0;
  for (character of string) {
    if (character.toLowerCase() != character) answer++;
  } 
  return answer;
}

let string = "KoreaTimeGoodABCDE";
console.log(solution(string));

//정규표현식
function solution2 (string) {
  return string.match(/[A-Z]/g).length;
}

console.log(solution2(string), '정규표현식');