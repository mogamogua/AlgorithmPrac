//중복문자제거
//소문자로 된 한 개의 문자열 입력 중복된 문자를 제거하여 출력하는 프로그램

//Set 이용
let string = 'ksekkset';

function solution(string) {
  const strArray = string.split('');
  const strSet = new Set();
  strArray.forEach(elem => strSet.add(elem));
  // console.log(Array.from(strSet));
  // console.log(Array.from(strSet).join(''));
  answer = "";
  // strSet.forEach((elem) => (answer += elem))
  for (let i of strSet) {
    console.log(i);
  }
  return answer;
}

console.log(solution(string))

//indexOf 이용


function indexSolution(string) {
  let answer = "";
  for (let i in string) {
    // console.log(typeof string.indexOf(string[i])); //number
    // console.log(typeof i); //string
    if (string.indexOf(string[i]) == i) {
      answer += string[i];
    }
  }
  return answer;
}

console.log(indexSolution(string));


// 정규표현식 사용
// function regSolution(string) {
//   return string.match(/(\w)*(\1)/g); // k와 kk사이 모든 문자 지운다ㅠ 안됨
// }

// console.log(regSolution(string), 'regSolution')