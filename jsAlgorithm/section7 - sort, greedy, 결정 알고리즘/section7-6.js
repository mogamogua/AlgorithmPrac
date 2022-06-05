//선생님이 N명의 학생들에게 번호를 정해주기 위해 키가 작은 순으로 세웠다.
//현수는 짝꿍보다 키가 크다.
//현수는 앞 번호를 받고싶어 짝꿍과 자리를 바꾸어 번호를 받았다.

//현수와 짝궁이 자리를 바꾼 후의 학생이 서있는 키 정보가 주어졌을 때,
//현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램
const N = 9, heights = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const M = 9, heights2 = [120, 130, 150, 150, 130, 150];
function getNumberOfStudent(heights) {
  let answer = [];
  let sorted = [...heights];
  //정렬하고, 달라진 인덱스를 찾는다.
  for (let i=1; i<sorted.length; i++) {
    for (let j=i-1; j>=0; j--) {
      if (sorted[j] > sorted[j+1]) {
        [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]]
      }
    }
  }
  
  for (let i=0; i<heights.length; i++) {
    if (heights[i] !== sorted[i]) {
      answer.push(i+1);
    }
    console.log(sorted, heights)
  }
  return answer;
}

console.log(getNumberOfStudent(heights));
console.log(getNumberOfStudent(heights2));
