//2. 괄호문자제거

//입력된 문자열에서 소괄호 () 사이에 존재하는 문자열 모두 제거.
//남은 문자만 출력

function delStrInBracket(string) {
  let stack = [];
  let stringArr = [...string];
  let i = 0;
  while (i < stringArr.length) {
    if  (stringArr[i] === ")") {
      let from = stack.pop();
      stringArr.splice(from, i-from+1);//괄호 안 문자 다 삭제
      i = from-1; //인덱스 위치 변경.
      console.log(i)
    } else {
      if (stringArr[i] == "(") stack.push(i);
    }
    i += 1;
    console.log(stringArr.join(""), stack)
  }
  return stringArr.join("")
}
const string = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(delStrInBracket(string));



//해답
function solution(string){  
  let answer;
  let stack=[];
  for(let elem of string){
    if(elem===')'){
      while(stack.pop()!=='(');
    }
    else stack.push(x);
  }
  answer=stack.join('');
  return answer;
}