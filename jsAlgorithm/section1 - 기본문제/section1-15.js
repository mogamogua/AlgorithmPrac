//소문자로 된 단어(문자열)입력
//해당 단어의 가운데 문자 출력 프로그램
//단어길이가 짝수일때 가운데 두개 문자 출력
//문자열 길이는 100이하

let word = 'study';
word = 'lovely';

function solution(word) {
  let halfIndex = Math.floor(word.length / 2);
  console.log(halfIndex)
  if (word.length % 2 === 0) {//짝수일 때
    return word.slice(halfIndex-1, halfIndex+1); //slice는 lastIndex-1까지자른다.
  } else {//홀 수 일 때 한 개 출력
    return word[halfIndex]
  }
}

console.log(solution(word));

//string.substring(startIndex [, lastIndex])
//string.slice(startIndex [, lastIndex])
//둘다 lastIndex-1까지 자른다.
// => 둘의 차이점은 음수 인덱스를 사용가능한지의 여부. slice는 음수 인덱스를 자유롭게 사용가능하다.

//string.substr(startIndex [, length]);