//멘토링
//총M번의 수학테스트 등수로 멘토 멘티를 정함
//멘토는 멘티보다 M번의 테스트에서 "모두"멘티보다 등수가 앞서야함.
//M번의 수학성적이 주어짐
// 멘토와 멘티가 될 수 있는 가지수를 출력

//첫줄 : N, M (1<=N<=20) (1<=M<=10)입력
//두 번째줄 : M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어짐
//먼저나온 순서대로 1,2,3...N등
//ex) 3 4 1 2 -> 3번이 1등, 4번이 2등

const N = 4, M = 3;
const testResult = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

//다시 풀기. 
function getMentorMate(N, M, students) {
  let answer = [];
  for (let mento=1; mento<=N; mento++) {
    for (let menti=1; menti<=N; menti++) {
      if (mento === menti) continue; // 1, 1이면 1,2로.넘어간다.
      let count = 0
      for (let k = 0; k < M; k++) {
        if (students[k].indexOf(mento) > students[k].indexOf(menti)) {
          count += 1;
        } else {break;}
      } 
      if (count === M) answer.push([mento, menti]); 
    }
  }
  return answer.length;
}

console.log(getMentorMate(N, M, testResult));


//문제 잘 못 이해하고 짠 코드.
function factorial(n) {
  if (n === 0) return 0; 
  result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

function solution (N, M, testResult) {
  //학생 번호 별로 등수 구하기
  const student = Array(N).fill(0); //index차례로 학생번호-1
  for (test of testResult) {
    for (let rank = 0; rank < N; rank++) {
      student[test[rank]-1] += rank;
    }
  }
  //x = 등수합이 중복된 수. ex ) [2, 2, 4, 8]로 등수 합이 같은 것이 2개
  //[1,3,4,8] 모두 다를 때 - 4가지 수 중 2개를 고르는 조합을 고르면 됨.
  // 중복된 수가 있을 때 - 전체 가지수에서 중복된 수에서의 조합2개를 고르는 경우를 빼기
  //NC2 - xC2해서 경우의 수 구하기
  
  //x(중복된 등수 합의 가지수) 구하기 - set사용
  const sameCheck = new Set();
  for (rank of student) {
    sameCheck.add(rank);
  }
  console.log(student)
  const x = student.length - sameCheck.size;
  //NC2 - xC2;
  //중복된 수가 0일 땐 xC2가 0이된다.
  const answer = (factorial(N)/(factorial(2)*factorial(N-2))) - (factorial(x)/factorial(2)*factorial(x-2));
  return answer;
}


// console.log(solution(N, M, testResult));/

