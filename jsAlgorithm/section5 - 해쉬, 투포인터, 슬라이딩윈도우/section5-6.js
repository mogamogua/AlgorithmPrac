//학급회장(해쉬)

//A,B,C,D,E후보가 등록됨. 
//학생들이 적은 알파벳이 차례로 입력됨
//누가 회장으로 선출되었는지 출력.
//반드시 한 명의 학급회장이 선출되도록 결과가 나왔다고 가정..

//5<=n<=50 (학생 수) => 50이하 길이의 '문자열'이 입력됨


//Map 자료형을 사용하자.

//Map => key, value쌍으로, set으로 설정하거나 대괄호 리터럴로 만들 수 있음
//const hi = [['a', 1], ['b', 2]] 
//object의 key는 string, symbol만 가능하지만 Map의 key로 number를 제외한  string, symbol(ES6), object, function이 올수 있다.
function countTheVotes(N, votes) {
  const candidate = new Map();
  let elected = '';
  let max = 0;
  for (let vote of votes) {
    if (candidate.has(vote)) {
      candidate.set(vote, (candidate.get(vote)+1));
      if (max < candidate.get(vote)) {
        max = candidate.get(vote);
        elected = vote;
      }}
    else candidate.set(vote, 1);
  }
  return elected;
}


const N = 15;
votes = 'BACBACCACCBDEDE';
console.log(countTheVotes(N, votes));



function solution(N, votes) {
  let elected = '';
  let candidate = new Map();
  for (let vote of votes) {
    if (candidate.has(vote)) candidate.set(vote, candidate.get(vote)+1);
    else candidate.set(vote, 1);
  }

  let max = Number.MIN_SAFE_INTEGER
  for (let [key, val] of candidate) {
    if (val > max) {
      max = val;
      candidate = key;
    }
  }
  return candidate;
}