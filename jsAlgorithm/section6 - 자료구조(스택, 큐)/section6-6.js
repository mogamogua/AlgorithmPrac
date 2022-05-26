//공주 구하기

//왕자 N명이 공주를 구할 수 있다.
// 나이순으로 차례로 1번부터 N번까지 번호를 매기고 시계방향으로 동그랗게 앉힌다.
// 첫번째 순서는 1번을 외치고 차례로 이어서 외친다.
// 만약 주어진 특정 숫자를 외치면 그 왕자는 제외된다.
// 다음 왕자부터 다시 숫자를 외친다. 또 그 숫자를외치면 제외된다.


//왕자의 수 5 <= N <= 1000, 외치면 제외되는 숫자 2<=K<=9가 주어진다.
//마지막에 남은 왕자의 번호를 출력한다.

// function selectPrince(N, K) {
//   const princes = Array(N)
//   for (let i=0; i<princes.length; i++) {
//     princes[i] = i+1;
//   }
//   console.log(princes)
//   let i = 0;
//   while (princes.length >= K) {
//     if (princes[i] % K === 0) {
//       princes.splice(i, 1);
//       console.log(i);
//     }
//     i += 1;
//     if (i > princes.length-1) i=0;
//   }
//   return princes;
// }
const N = 8, K = 3;
//console.log(selectPrince(N, K)); //7

function solution(N, K) {
  let answer;
  let queue = Array.from({length: N}, (v, i) => i+1);
  while (queue.length) {
    for (let i = 1; i<K; i++) queue.push(queue.shift()); //앞에서빼고 뒤로 넣는다. 두번째까지.
    queue.shift(); //세번째는 뺀다.
    if (queue.length === 1) answer=queue.shift();
  }
}


function mySolution(N, K) {
  const princes = Array.from({length: N},(value, index) => index+1);
  let answer;
  while (princes.length) {
    for (let i = 1; i<K; i++) {
      princes.push(princes.shift());
    }
    princes.shift();
    if (princes.length == 1) answer = princes.shift();
  }
  return answer;
}

console.log(mySolution(N, K))