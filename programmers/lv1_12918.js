//문자열 다루기 기본

//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
//예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.



//나의풀이
function solution(s) {
  const digit = /\D/g //number가 아닌 것이 있는지 체크한다.
  return (digit.test(s)) ? false : ((s.length === 4 || s.length === 6) ? true : false)
}
//=> 숫자만 가능하게 하는 정규식표현을 제대로 몰라서 반대로 체크하는 방법을 사용했다.
//숫자만 가능하도록 하는 정규식 표현은 "/^\d+$/" 혹은 "/^[0-9]+$/"
//정규식 공부가 더 필요하다.


function alpha_string46(s){
  let regex = /^\d{6}$|^\d{4}$/; //길이까지 한꺼번에 체크하기
  return regex.test(s);
}


function alpha_string46(s){
  //parseInt한 것과 원래 string이 같다면 애초에 숫자로만 이루어졌던 것.
  let temp = parseInt(s);
  return (temp === s) ? (s.length === 4 || s.length === 6 ? true : false) : false;
}

function solution(s) {
  if(s*1+'' == s && Math.abs(5-s.length) === 1) return true;
  //string을 숫자형으로 바꾸었다가 다시 문자형으로 바꾼것이 원래와 같은지 검사.
  //4와 6은 5와 1차이 나는 것을 이용하여 절대값으로 길이가 1차이가 나는지 검사.
  return false;
}