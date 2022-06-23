


//💫꿀Tip
//toString 매개변수 이용하여 진법변환하기
// 기수를 이용함으로써 10진수를 다른 진수로 변환가능. 
//예제)
let baseTenInt = 10;
console.log(baseTenInt.toString(2)); //=> 10을 2진수 '1010'로변환.


const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

//풀어쓰기
const solution = (n) => {
  let ternary = n.toString(3); //3진수 변환하기
  ternary = [...ternary].reverse(); //뒤집기
  ternary = ternary.join(""); //배열을 다시 문자열로 변환
  ternary = parseInt(ternary, 3); //3진법을 10진법으로 변환
  return ternary;
}

//해답2
function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);//unshift하여 숫자 순서 뒤집기
        n = Math.floor(n/3); //나누었을 때 소수점 내림하여 없애기. 
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0); //3진수를 10진수로 변환하기.
    //parseInt가 아니라 이런방법도 사용할 수 있음을 알고있기.
    //Math.pow(3, i) == 3**i
}

//나의 풀이
function solution(n) {
  var answer = 0;
  
  let ternary = "";
  while (n >= 1) {
      ternary += n%3; //나머지를 뒤쪽에 넣으면 진법변환시 저절로 앞뒤가 바뀐다.
      n = parseInt(n/3, 10); //나눗셈 시 생기는 소수점을 parseInt로 없앴다.
  }
  answer = parseInt(ternary, 3)
  return answer;
}