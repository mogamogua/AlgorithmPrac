//N개의 자연수 입력, => 각 자연수의 자릿수 합 구하기
//그 합이 최대인 자연수를 출력하는 프로그램
//235 1234 동시에답이될 수 있다면 원래 숫자가 큰 1234답으로 출력해야함.

// 각 자연수의 크기 <= 10,000,000
function solution(N, numbers) {
  let [largestSum, largestNum] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (let i = 0; i < numbers.length; i++) {
    const numberArr = numbers[i].toString().split('');
    const sumOfNumber = numberArr.reduce((acc, curr) =>(Number(acc) + Number(curr)))
    if (largestSum < sumOfNumber) {
      largestSum = sumOfNumber;
      largestNum = numbers[i];
    } else if (largestSum == sumOfNumber) {
      numbers[i] > largestNum ? largestNum = numbers[i] : null
    }
  }
  return largestNum;
}

const N = 5;
const numbers = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(N, numbers));

//나머지와 몫을 사용하여 각 자리수 합 구하기

function solution2(N, numbers) {
  let largestNum, largestSum = Number.MIN_SAFE_INTEGER;
  for(let number of numbers) {
    let sumOfNumber = 0;
    let tempNum = number;
    while (tempNum) {
      sumOfNumber += tempNum % 10;
      tempNum = Math.floor(tempNum / 10); //floor: 소수점내림
    } 
    if (sumOfNumber > largestSum) {
      largestSum = sumOfNumber;
      largestNum = number;
      console.log(largestSum, largestNum)
    } else if (sumOfNumber === largestSum) {
      if (number > largestNum) largestNum = number;
    } 
  }
  return largestNum;
}

console.log(solution2(N, numbers))