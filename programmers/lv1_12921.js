//1부터 n까지의 소수 개수 구하기

//에라토스네테스의 체 이용.
//"모든 배수를 제외하면 나머지는 소수" = "배수를 모두 지우면 소수가 남는다."
//1~n까지의 소수를 구할 때, sqrt(n) 이하의 배수들만 제거하면 된다.

//나의 풀이 

function solution(n) {
  let arr = new Array(n+1).fill(true);
  arr.fill(false, 0, 2); //0, 1인덱스는 false로.

  for (let i=2; i*i<=n; i++) { //n의 제곱근이하의 수로만 지워도 끝난다.
    if (arr[i]) { //true일 때 == 아직 안지워졌을 때 == 소수일 때
      for (let j=i*i; j<=n; j+=i) { 
        //i의 배수를 지운다.i제곱수 이하는 이미 i보다 작은 수로 체크 되었다.
        arr[j] = false;
      }
    }
  }
  return arr.filter(x=> x).length; //true인 것들의 개수
}


//원리는 비슷하지만 방식이 다른 풀이
function solution(n) {
  const set = new Set();

  for (let i=3; i<=n; i+=2) { //짝수는 2를 제외하고는 소수가 아니므로 홀수만 넣는다.
    set.add(i);
  }
  set.add(2);

  for (let i=3; i*i<=n; i++) { //에라토스테네스의 체로 거른다.
    if (set.has(i)) {
      for (let j=i*i; j<=n; j+=i) { //소수의 제곱수 이상의 수에서 소수의 배수를 거른다.
        set.delete(j);
      }
    }
  }

  return set.size();
}

//중복되지 않는 요소의 값위주로 연산할 땐 배열보단 set이 더 편리하다는 것을 알게 되었다!