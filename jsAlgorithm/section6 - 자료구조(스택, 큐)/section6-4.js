//4. 후위식 연산(postfix)

//후위연산식이 주어지면 연산한 결과를 출력.
//ex) 352+*9- => (2+5)*3-9

//연산식의 길이는 50이하
//1~9 수와 사칙연산으로만 이뤄짐.


function postfix(expression) {
  let stack = [];
  let answer = Number.MAX_SAFE_INTEGER;
  for (x of expression) {
    if (1<=x && x<=9) {
      stack.push(x);
      expression = expression.replace(x, "");
    } else { //연산식일 때
      if (answer > 9**4) { //연산을 한 적 없을 때
        answer = eval(`${stack.pop()}${x}${stack.pop()}`);
      } else {
        answer = eval(`${answer}${x}${stack.pop()}`);
      }
    }
  }
  return answer;
}

const expression = "352+*9-";
console.log(postfix(expression));