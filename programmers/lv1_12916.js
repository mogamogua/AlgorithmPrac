//문자열 내 p와 y의 개수

//대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
//s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 
//'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
//단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

//나의 풀이
function solution(s){
  let upper = s.toUpperCase().split("")
  return upper.filter(x=> x=="P").length == upper.filter(x=> x =="Y").length
}


//💫정규표현식을 사용한 풀이 꿀팁

//✅i 플래그를 사용하면 대소문자를 구별하지 않는다.
//✅g 플래그를 사용하면 주어진 조건을 만족하는 여러개의 결과를 배열로 반환한다.
//g플래그가 없다면 조건 만족하는 최초의 요소만 반환.
function solution(s){
  return (s.match(/p/ig)||[]).length == (s.match(/y/ig)||[]).length;
}


//💫정규표현식 method정리
//match : 정규표현식 조건에 맞는 요소들 배열로 반환
//search : 찾고자하는 문자열의 인덱스 값 반환.
//replace(regExp, str) : 정규표현식 조건에 매칭되는 요소들 대체문자열로 변환
//string.split(regExp) : 정규표현식에 매칭되는 요소를 기준으로 문자열들을 쪼개 배열에 넣어 반환 (이 때 기준이 되는 문자열은 사라진다.)
//regExp.test(string) : 정규표현식에 조건에 맞으면 true, 맞지 않으면 false반환
//regExp.exec(string) : match와 유사하지만, 무조건 처음 매칭되는 요소만 반환한다.