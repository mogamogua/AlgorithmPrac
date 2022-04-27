//7개의 수가 주어지면 그 수 중 가장 작은수를 출력하는 프로그램

let a = 5, b = 3, c = 7, d = 11, e = 2, f = 15, g = 17

function solution(a,b,c,d,e,f,g) {
  console.log(Math.min(a,b,c,d,e,f,g));
}

// solution(a,b,c,d,e,f,g);

let num = [5, 3, 7, 11, 2, 15, 17];


function solution1(num) {
  let min = Number.MAX_SAFE_INTEGER; //아주 큰 정수로 미리 초기화.

  for (let i = 0; i<num.length; i++) {
    if (num[i] < min) {
      min = num[i];
    }
  }
  console.log(min);
}

solution1(num);