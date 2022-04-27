//두 사람이 가위바위보. N번의 게임 => A,B 중 승자 출력
//비긴 경우 D 출력
//1: 가위, 2: 바위, 3: 보
//각 회차마다 A, B의 가위바위보 정보가 입력된다. => 각 회 누가 이겼는지 출력

//첫줄 : N(경기회수)
//두번째줄 : A가 낸 가위바위보 정보 N개
//세번째 줄 : B가 낸 가위바위보 정보 N개

//winnercheck

  //바위 - 가위 : 1
  //보 - 바위 : 1
  //가위 - 보 : -2

  //질 떄
  //가위 - 바위 : -1
  //바위 - 보 : -1
  //보 - 가위 : 2

  //비길 때: 0
function solution(data) {
  for (let i = 1; i <=data[0]; i++) {
    const winnerCheck = data[i] - data[i+data[0]];
    if (winnerCheck === 1 || winnerCheck === -2) {
      console.log('A')
    } else if (winnerCheck === 0) {
      console.log('D')
    } else {
      console.log('B')
    }
  }
}

const data =[
  5,
2, 3, 3, 1, 3,
1, 1, 2, 2, 3
]

solution(data);