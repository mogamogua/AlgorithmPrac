//길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 
//이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다

const a = 6;
const b = 7;
const c = 11;

//세 변의 길이가 주어졌을 때 삼각형이 될 수 있는 조건은,
// 가장 긴 변의 길이가 나머지 변의 길이의 합보다 작은 것.
function solution(a, b, c) {
  var answer = "";
  let max = 0;
  if (a < b) {
    max = b
  } else {
    max = a
  }
  if (max < c) {
    max = c;
  }

  (c < a + b) ? answer = "YES" : answer = "NO";
  console.log(answer);
}

solution(a, b, c);

function solution2(a, b, c) {
  let answer = "YES";
  let total = a + b + c;
  if (a < b) {
    max = b
  } else {
    max = a
  }
  if (max < c) {
    max = c;
  }

  if (total - max < max) {
    answer = "NO";
  }
  console.log(answer);
}

solution2(a,b,c)