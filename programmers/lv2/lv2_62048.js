//멀쩡한 사각형

//나의 풀이
function solution(w, h) {
  //w, h의 최대공약수를 구한다.
  const gcd = getGcd(w, h);
  // 지나간 블록 세기 : 최대공약수로 나눈만큼만 센다.
  count = 0;
  for (let i = 1; i<=(w/gcd); i++) {
    // 현재좌표 높이.올림 - 이전 좌표 높이.내림
      count += Math.ceil((h/w)*(i)) - Math.floor((h/w)*(i-1));
  }
  return w*h - count*gcd;
}
//최대공약수 구하는 함수
function getGcd(a, b) {
  let min = Math.min(a,b)
  let gcd = 1;
  for (let i=1; i<=min; i++) {
       if (a%i === 0 && b%i === 0) gcd = Math.max(gcd, i);
  }
  return gcd;
}




//-----
//다른풀이1

function solution(w,h){
    const slope = h / w; //기울기
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i); //전체 좌표.올림 만큼 result에 담고
    }

    return ((h * w) - result) * 2; //전체 사각형 개수에서 뺀것으로 한쪽을 구하고 *2한다.
}



//풀이2
function solution(w,h){
  //❗ 최대공약수 구하는 함수... 신박하다..!
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };


    return w * h - (w + h - gcd(w, h)); 
    //전체 사각형 개수에서 가로, 세로를뺀 후 최대공약수를 더해주면된다.
    //w', h'이 서로소일 때, w+h-1이 대각선이 지나는 사각형 개수.
    //서로소 블락으로 나뉘는 블락 수 = w, h의 최대공약수.
    //(w'+h'-1)*gcd(w, h) = w + h-gcd(w,h)

}