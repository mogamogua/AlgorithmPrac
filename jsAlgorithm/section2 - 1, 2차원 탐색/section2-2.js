//보이는 학생
// 1~1000명이하의 학생을 일렬로 세운다. 
// 일렬로 서있는 학생의 키가 앞에서붜 순서대로 주어질 때,
//맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하라.
//앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 ㅇ낳음.

//부분배열에서의 최댓값을 구하기

//첫 줄은 정수 N이 입력되고 , 이어서 N명의 학생 키가 주어진다.
// 선생님이 볼 수 있는 최대 학생수

function solution(students) {
  let count = 0;
  const max = students.reduce((acc, curr) => {
    if (acc < curr) {
      count++;
      return curr;
    } else {
      return acc;
    }
  })
  console.log(count);
}

let students = [8, 130, 135, 148, 140, 145, 150, 150, 153]
solution(students);


function solution2(students) {
  let count = 1;
  let max = students[1];
  for (let i = 2; i <= students[0]; i++) {
    if (students[i] > max) {
      count++;
      max = students[i];
    }
  }
  console.log(count);
}

solution2(students);

