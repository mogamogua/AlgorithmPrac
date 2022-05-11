//모든 아나그램찾기(해쉬, 투포인터, 슬라이딩 윈도우)

//S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램 만들기.
//아나그램 판별시 대소문자 구별해야함.
//부분 문자열은 연속된 문자열이여야함

//S 문자열의 길이는 10000을 넘지 않음.
//T 문자열은 S문자열보다 길이가 작거나 같습니다.

//S단어에 T문자열과 아나그램이 되는 부분문자열의 개수 출력

function countAnagrams(S, T) {
  let answer = 0;
  const tMap = new Map();

  for (let elem of T) {
    if(tMap.get(elem) !== undefined) tMap.set(elem, tMap.get(elem)+1);
    else tMap.set(elem, 1);
  }
  const wordLen = tMap.size
  for (let i=0; i+wordLen<=S.length; i++) {
    let j = i+wordLen;
    const sMap = new Map();
    [...S.slice(i, j)].forEach((elem) =>{
      if (sMap.get(elem) !== undefined) sMap.set(elem, sMap.get(elem)+1);
      else sMap.set(elem, 1);
    })

    if (sMap.size !== tMap.size) continue;
    
    sameCount = 0;
    [...sMap.entries()].forEach(([key, value]) => {
      if (tMap.get(key) == value) sameCount++;
    })
    if (sameCount === wordLen) answer++; 
    console.log(sMap.entries()) 
  }
  return answer;
}
  
//무한루프..ㅠ
// function countAnagram(S, T) {
//   const count = new Map();
//   for (let alphabet of T) {
//     if (count.has(alphabet)) count.set(alphabet,count.get(alphabet)+1);
//     else count.set(alphabet, 1);
//   }
//   let answer = 0;
//   let i = 0, j = i-1+count.size
//   while (i < S.length && j < S.length) {
//     let answerStr = '';
//     for (index in S.slice(i,j)) {
//       if (!count.has(S[i+index]) || count.get(S[i+index]) == 0) {
//         i = S.indexOf(S[i+index], i+index) + 1;   
//         j = i + count.size - 1     
//         break;
//       } else {
//         count.set(S[i+index], count.get(S[i+index])-1);
//         answerStr += S[i+index];
//         if (answerStr.length === count.size) {
//           ++i;
//           ++j;
//           ++answer;
//           break;
//         }
//       }
//     }
//   }
//   return answer;
// }

const S = 'bacaAacba', T = 'abc';
console.log(countAnagrams(S, T));