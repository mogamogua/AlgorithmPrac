//OX문제 계산
//틀리다가 처음 맞은 문제 1점 
//1번 : 1점
// 연속 답 맞을 시 연속으로 맞은 두번째 2점 세번째 3점.. 
//K번째 K점
//틀리면 0점

// 채점결과가 1(맞음)과 0(틀림)으로 주어졌을 때 총 점수 계산

//첫 줄에 문제의 개수 1 <=N <=100 이 주어짐
//둘 째줄 N개 문제의 채점 결과를 나타내는 0, 1이 공백 하나를 두고 주어진다.

function solution (results) {
  const resultArr = results.split(' ');
  const score = [];
  score.push(results[0]-0)

  for (let i = 1; i < resultArr.length; i++) {
    if (resultArr[i] - 0 === 0) {
      score.push(0);
    } else {
      score.push(score[i-1] + (resultArr[i]-0))
    }
  }
  console.log(score.reduce((acc,curr) => acc + curr));
}

const result = "1 0 1 1 1 0 0 1 1 0";
solution(result);