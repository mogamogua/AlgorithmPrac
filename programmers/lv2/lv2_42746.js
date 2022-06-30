//가장 큰 수

//0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

//주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 
///이중 가장 큰 수는 6210입니다

//sort를 잘 활용하기.
function solution (numbers) {
  numbers.sort((a,b) => (String(b)+String(a)) - (String(a)+String(b))); //callback이 양수를 리턴하면 서로 자리를 바꾼다.
  //js는 string끼리 뺐을 때 number로 형변환된다. 
  //106 - 610이 음수이므로 그대로.
  //numbers = [6, 2, 10];
  let answer = numbers.join(""); //"6210"
  return answer == 0 ? "0":answer; //"000"일 경우 "0"만 리턴
  }