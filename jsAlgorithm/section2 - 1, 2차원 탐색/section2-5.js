//1~100명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력

//3<=N<=100
//두번째 줄에 국어점수 N개의 정수가 입력
//같은점수 입력 -> 높은 등수로 동일 처리



function solution(N, scores) {
  //sorting
  const students = [...scores]
  decBubbleSort(scores);
  for (let i = 0; i < scores.length; i++) {
    const studentIndex = students.indexOf(scores[i]);
    if (i === scores.indexOf(scores[i])) { //해당 부분 중복 점수가 아니라면
      students[studentIndex] = i+1;
      console.log(students)
    } else { //두 번째 등장한 점수일 경우
      const sameScoreLen = scores.findIndex((score) => score > score[i]);
      students.splice(studentIndex, sameScoreLen, i+1);
      console.log(scores)
      i += sameScoreLen;
    }
  }
}

function decBubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = arr.length-1; j > i; j--) {
      if (arr[j-1] < arr[j]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {return arr};
  }
  return scores;
}

const N = 5;
const scores = [87, 89, 92, 100, 76]; 

// console.log(solution(N, scores));

//해답 : 매우 간단

const solution2 = (N, scores) => {
  const ranking = Array(N).fill(1);
  for (let studentIndex in scores) {
    for (let other in scores) {
      if (scores[studentIndex] < scores[other]) { //나보다 높은 점수 발견하면
        ranking[studentIndex]++;
      } //등수는 낮아진다.
    }
  }
  return ranking;
}

//위 해답에선 중복 등수도 모두 고려되었음.

console.log(solution2(N,scores), '해답')