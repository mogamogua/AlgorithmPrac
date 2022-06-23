//2016년

//나의 풀이 : date내장 객체 사용하여 쉽게 풀기
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(2016, a-1, b)
  return day[date.getDay()];
}

//다르 풀이 : date객체 사용하지 않기
function getDayName(a,b){
  let answer = "";

  let MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //2016년은 윤년
  let WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  let sum = 0;

  for(let i=1; i<a; i++){
    sum+=MONTH[i-1];
  }

  answer = WEEK[(sum+b-1)%7]; //1월1일이 금요일이고 이를 기준으로 하기 때문에 1일을 뺀다.
  // 1월 1일은 금요일
  // 31,29,31,30,31,30,31,31,30,31,30,31

  return answer;
}