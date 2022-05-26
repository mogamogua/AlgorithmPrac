// 쇠막대기

//여러개의 쇠막대를 레이저로 절단한다. 
//쇠막대를 아래에서 위로 겹쳐놓고, 레이저를 위에서 수직으로 발사하여 자른다.


//쇠막대, 레이저 배치조건
//(1) 쇠막대는 자신보다 긴 쇠막대 위에만 놓인다.
// 쇠막대를 다른 쇠막대 위에 놓는 경우 완전이 포함되도록, 끝점은 겹치지 않도록 놓는다.
//(2) 각 쇠막대를 자르는 레이저는 적어도 하나씩 존재함
//(3) 레이저는 쇠막대의 양 끝점과 겹치지 않는다.

//쇠막대, 레이저의 배치는 괄호를 이용하여 왼쪽부터 표현한다.

//(1) 레이저는 괄호의 쌍'()'으로 표현됨.모든 '()'는 레이저를 표현한다.
//(2) 쇠막대의 왼쪽 긑은 여는 괄호, 오른쪽 끝은 닫힌 괄호로 표현.

//예시 o: laser, -: 막대
//'()(((()())(())()))(())' => 17개로 잘림


//괄호표현이 주어졌을 때, 잘려진 쇠막대기조각의 총 개수를 구하시오.


//입력 :괄호문자 개수는 최대 십만개
const input1 = "()(((()())(())()))(())"
const input2 = "(((()(()()))(())()))(()())"

// function countSlicedBar(bracket) {
//   const stack = [];
//   let laser = 0;
//   let count = 0;

//   for (let i=0; i<bracket.length; i++) {
//     if (bracket[i] + bracket[i+1] == "()") {
//       console.log(bracket[i], bracket[i+1])
//       laser +=1;
//       console.log(i, '레이저추가')
//       i++;
//     }
//     else if (bracket[i] === "(") {
//       stack.push([bracket[i],]);
//       console.log(i, 'stack added', stack)
//     }
//     else if (bracket[i] === ")" && stack.length) {
//       stack.pop();
//       count += laser+1;
//       console.log(stack, 'pop')
//       if (stack.length == 0) {
//         laser = 0;
//         console.log(laser, i, 'laser=0')
//       }
//   }
//   console.log(count,'count')
// }
// return count;
// }

// console.log(countSlicedBar(input1), 1);
// console.log(countSlicedBar(input2), 2);

function solution(bracket) {
  let count = 0;
  let stack = [];
  for (let i=0; i<bracket.length; i++) {
    if (bracket[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (bracket[i-1] === "(") count += stack.length;//레이저일 때 잘린 왼쪽 부분 세기
      else count++; //레이저가 아니라 막대의 끝부분이라면 잘린 가장 오르쪽 부분을 추가.  
    }
  }
  return count;
}

console.log(solution(input1))
console.log(solution(input2))