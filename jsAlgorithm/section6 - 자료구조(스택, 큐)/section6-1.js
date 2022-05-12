//1. 올바른 괄호

//괄호가 입력되었을 때 올바른 괄호면 'YES', 아니면 'NO' 출력
// "(())()"는 올바른 문자열. "(()()))"는 아님.


//입력 : 최대 길이 30

//올바른 괄호란, 두 짝이 같은 범위 안에서 나타나야 한다.
// 배열에 문자열을 넣고, 짝이 나타났을 때 최근에 넣은 왼쪽 괄호를 같이 뺀다.

//틀린 풀이 : 각 괄호의 두 쌍 개수가 같더라도 , 올바른 괄호가 아닐 수 있다.
//예시 : )))((( or ()())((),,,

// function countBracket(string) {
//    const checkMap = new Map();
//    [...string].forEach((elem) => {
//      checkMap.has(elem) ? checkMap.set(elem, checkMap.get(elem)+1) : checkMap.set(elem, 1)
//    });
//    const mapVal = checkMap.values();
//    return mapVal.next().value === mapVal.next().value;
// }

const string = "(()(()))(()";
// console.log(countBracket(string));

function checkBracket(string) {
   let checkArr = [];
   for (let elem of string) {
     if (elem == "(") checkArr.push(elem);
     else if (checkArr.length) checkArr.pop();
     else return false;
   }
  if (checkArr.length) return false;
}

console.log(checkBracket(string))

function checkBracket2(string) {
  let left = 0;
  for (let elem of string) {
    if (elem == "(") left++;
    else if (left) left--;
    else return false;
  }
  if (left) return false; 
}

console.log(checkBracket2(string));