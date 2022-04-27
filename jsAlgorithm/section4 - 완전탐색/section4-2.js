//뒤집은 소수
//N개의 자연수 입력
//(1) 각 자연수 뒤집기
// (2) 뒤집은 수가 소수면 그 소수를 출력

//=>소수인지 판별하는 함수 만들기

function isPrime(number) {
  //1은 소수가 아니다.
  if (number <= 1) return false;
  // if (number <= 3) return true; //아래 for문을 그냥 통과하면서 true반환
  for (x = 2; x**2 < number; x++) {
    if(number % x === 0) return false;
  }
  return true;
}

function solution(N, numbers) {
  for (let number of numbers) {
    let temp = number.toString();
    reversedNum = '';
    for (let i = temp.length - 1; i >= 0; i--) {
      reversedNum += temp[i];
    }
    reversedNum -= 0; //형변환

    if(isPrime(reversedNum)) console.log(reversedNum)
  }
}
const N = 9;
const numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100]

solution(N, numbers)

//소수뒤집기 -> 나누기 및 몫 사용하기
// num % 10은 1의자리수를 도출한다.
function solution2(N, numbers) {
  let answer = [];
  for (let number of numbers) {
    let reversedNum = 0;
    while (number) {
      let temp = number % 10;
      reversedNum = reversedNum * 10 + temp;
      number = parseInt(number/10, 0);
    }
    if (isPrime(reversedNum)) answer.push(reversedNum);
  }
  console.log(answer);
} 

solution2(N, numbers, 'solution2')