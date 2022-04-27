//대문자와소문자가 같이 있는 문자열 입력
//대문자는 소문자,, 소문자는 대문자로!

let string = "sTuDy EngLIsh";

function solution1(string) {
  let answer = "";
  for (character of string) {
    if (character.toLowerCase() === character) {
      answer += character.toUpperCase();
    } else {
      answer += character.toLowerCase();
    }
  }
  console.log(answer);
}

solution1(string);

function solution2(string) {
  let answer = "";

  for (character of string) {
    let asciiNum = character.charCodeAt();
    if (asciiNum >= 97 && asciiNum <= 122) {
      answer += String.fromCharCode(asciiNum - 32);
    } else if (asciiNum >=65 && asciiNum <= 90) {
      answer += String.fromCharCode(asciiNum + 32);
    } else {
      answer += character;
    }
  }
  console.log(answer);
}

solution2(string);