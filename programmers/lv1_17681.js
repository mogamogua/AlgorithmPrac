
//2018 Kakao blind recruiting 비밀지도

//비트연산자를 이용한 풀이.
function solution(n,arr1, arr2) {
  return arr1.map((a, i) => (a | arr2[i]).toString(2).padStart(n,0).replace(/1/g, "#").replace(/0/g, " "))
}

//비트연산자 : 주어진 ㅣ수를 2진수로 변환하여 비트 단위로 논리연산을 수행하는 연산자.
//비트 연산자 |는 각각비트를 비교하여 OR연산한다.
// "1110" | "0011" == "1111"

//문자열 바로 숫자로 바꾸기 ❗💫꿀팁 : +사용하기.
function solution(n, arr1, arr2) {
  return arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, "0").replace(/1|0/g, a => +a ? '#' : ' '));
}
//여기서 replace(/1|0/g, a => +a ? "#" : " ") <이부분 중요!!
//문자열 "1" 또는 "0"에 +"1"하면 숫자형1, 0이된다. <<아는데 활용하지 못한 부분. 
//1은 truthy, 0은 falsy한 값이므로 바로 변환가능.

//나의 풀이
function solution(n, arr1, arr2) {
    let answer = [];

    for (let i=0; i<n; i++) {
        map1 = arr1[i].toString(2).padStart(n, "0");
        map2 = arr2[i].toString(2).padStart(n, "0");
        let merged = ""
        for (let k=0; k<n; k++) {
            merged += (Number(map1[k]) || Number(map2[k]) ? "#" : " "); //정규표현식을 사용하면 하나하나 비교하지 않아도 됐을것,,,
        }
        answer.push(merged)
    }
    return answer
}