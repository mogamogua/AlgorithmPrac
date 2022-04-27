//문제 1
// 섬으로 향하라!

// '   + -- + - + -   '
// '   + --- + - +   '
// '   + -- + - + -   '
// '   + - + - + - +   '

// 해(1)와 달(0),
// Code의 세상 안으로!(En-Coding)

// 해와 달 → 1과 0, 즉, 2진수.

// En-coding → ASCII를  떠올려야 하는 문제.

let password = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   ',
  ]

let answer = ""

for (let str of password) {
  const asciNumber = str.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0")
  console.log(parseInt(asciNumber, 2)); // 74 69, 74, 85
  console.log(String.fromCharCode(parseInt(asciNumber, 2))); // J, E, J, U
  answer += String.fromCharCode(parseInt(asciNumber, 2))
} 

console.log(answer); //JEJU
 
//오답노트 
//parseInt사용 시 10진법으로 바꾸었다,, 2진법의 1001010-> 십진법의 74로바꾸어줄줄알았으나
//parseInt(asciNumber, 10) 했을 땐 1001010이 그대로 십진법으로 백만천십으로 바뀌었고
//String.fromCharcode메소드로 변환시 한자가 나타났다!