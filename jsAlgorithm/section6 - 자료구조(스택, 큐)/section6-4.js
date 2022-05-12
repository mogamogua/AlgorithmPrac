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


//해답
function solution(expression){  
  let answer;
  let stack=[];
  for (let x of expression) {
    if (!isNaN(x)) stack.push(Number(x));
    else {//연산식일 때
      let right = stack.pop(), left=stack.pop();
      if (x === "+") stack.push(left+right);
      else if (x === "-") stack.push(left-right);
      else if (x === "*") stack.push(left*right);
      else if (x === "/") stack.push(left/right);
    }
  }

  answer=stack[0];
  return answer;
}
//여기서는 stack하나로 연산하고있다. 연산 결과를 stack에 추가함으로써 후위연산을 이어서할 수 있다.
// eval을 사용하지 않고, if문으로 연산식을 구분하여 연산하고 있다.