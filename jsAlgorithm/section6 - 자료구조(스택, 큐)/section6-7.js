//7. 교육과정 설계

//필수과목은 반드시 이수해야 함. 순서도 정해져있음.
// 만약 필수과목이 CBA면 B를 듣기전 C를 들어야 함.

//필수과목이 주어지면, n개의 수업의 설계가 잘되었는지 판별하여 'YES' 'NO'를 출력

//입력
//첫줄: 필수과목 순서(영문대문자)
//두번 째 줄: 수업설계서 (30이하 길이의 string)

function checkLectureSequence(requirements, lectures) {
  let i = 0;
  for (let lecture of lectures) {
    if (lecture === requirements[i]) {
      console.log(lecture, requirements[i])
      i++;
    }
  }
  if (i===3) console.log('YES')
  else console.log(requirements)
  
}


const requirements = "CBA";
const lectures = "CBDAGE";
checkLectureSequence(requirements, lectures);

//solution

function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split(''); //필수과목으로 array만들기
  for (let lecture of plan) {
    if (queue.includes(lecture)) {
      if (lecture !== queue.shift()) {
        return "NO"
      }
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}