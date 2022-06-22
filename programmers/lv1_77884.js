// 두 정수 left와 right가 매개변수로 주어집니다. 
// left부터 right까지의 모든 수들 중에서, 
// 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  var answer = 0;
  
  for (let num = left; num <= right; num++) {
      //예외 : num이 1일 때
      if (num == 1) {
          answer-=1;
          continue;
      }
      //약수 개수 구하기
      let count = 2;
      for (let i=2; i<num; i++) {
          if (num%i==0) count++;
      }
      (count % 2 == 0) ? answer+=num : answer -=num
  }
  return answer;
}

//💫꿀TIP
//제곱수는 약수가 홀수다. 
//-> 서로 다르수 가 아니라 같은 수를 두번 곱해서 만들어졌기 때문에,,
//예시 : 25 - 1, 5, 25 ; 64: 1, 2, 4, 8, 16, 32, 64 : 8말고는 다 짝이 있다

function solution2(left, right) {
  var answer=0;

  for(let i = left; i<=right; i++) {
     (Number.isInteger(Math.sqrt(i))) ? answer -= i : answer += i
  }
  return answer;
}

