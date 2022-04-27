//대문자와 소문자가 같이 있는 문자열입력 받아서
//대문자로 통일하여 출력하는 프로그램

function solution(string) {
  console.log(string.toUpperCase());
}

let string = "itisTimeToStudy";
solution(string);

//ASCII 코드 숫자 이용하기

// 소문자는 ASCII코드 숫자가 97에서 122이며, 대문자와 32차이난다.

function solution2(string) {
  let answer = "";
  for (let character of string) {
    let asciiNum = character.charCodeAt();
    if (asciiNum >= 97 && asciiNum<= 122) {
      //소문자일 때, 대문자 변환해서 넣기
      answer += String.fromCharCode(asciiNum-32);
    } else {
      answer += character;
    }
  }
  return answer;
}

console.log(solution2(string))