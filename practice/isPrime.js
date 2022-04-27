// https://themarketer.tistory.com/73

//에라토스네테스의 체
//"모든 배수를 제외하면 나머지는 소수다. = 배수들은 소수가 아니다. 배수를 모두 지우면 소수가 남는다."
//1~n까지의 소수를 구할 때, sqrt(n) 이하의 배수들만 제거하면 된다.
//ex) 100까지의 소수를 구할 때, sqrt(100)보다 큰 11의 제곱은 121로 범위를 벗어난다.

//n까지의 자연수 중 소수의 개수 구하기.
function getPrimeToN(n) {
  let arr = Array(n+1).fill(true); //n+1까지의 인덱스를 갖는 길이의 배열생성
  arr.fill(false, 0, 2); //0, 1인덱스는 false (소수가 아님)

  for (let i = 2; i*i<=n; i++) { //n^2보다 작은 i까지 배수제거
    if (arr[i]) { //해당 인덱스가 true면 :false처리 안된경우 = 소수인경우
      for (let j=i*i; j<=n; j+=i) { 
        //i의 제곱부터 배수를 순회하며 삭제 : 이전의 값들은 이미 전에 삭제됨
        //j += i : 25, 30, 35, 40, .. 삭제
        arr[j] = false; //i의 제곱 이상의 i배수들 삭제
      } 
    }
  }

  return arr.filter(elem => elem).length; 
  // elem => elem 각 요소들이 boolean이기 때문에 false인 것들은 걸러진다. true인 것들의 개수를 구함.
}




//해당 요소가 소수인지 확인하기, 주어진 배열에서 소수 찾기 - find활용 MDN 출처
function isPrime(element) {
  let start = 2;
  while (start <= Math.sqrt(element)) { //해당 수의 제곱근보다 작은 수까지만 배수 확인. (소수는 1과 자기자신만 약수로가지기때문에)
    if (element % start++ < 1) { //2,3,4,.. 제곱근까지의 수로 나누어서 나머지가 0이면 start는 element의 약수. 소수가아님
      return false; //2,3까지는 while문 돌지 않고 4부터 돈다. 
    }
  }//if문에 안걸리고 while문을 마친경우 
  return element > 1; //element가 1보다 큰 경우에만 true리턴
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5


//find 메소드 parameter : 세가지
