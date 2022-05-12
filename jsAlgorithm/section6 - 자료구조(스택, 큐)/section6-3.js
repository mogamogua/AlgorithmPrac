//3. 크레인 인형뽑기 게임(카카오 기출)

//1x1 크기의 칸으로 이뤄진 N x N 크기의 정사각 격자에 인형이있다.
//오른쪽엔 바구니가있다.
//인형은 격자를 아래부터 쌓여있다.
//유저는 위에있는 크레인을 좌우로 움ㅈ직여 멈춘 위치에서 인형을 들어올린다.
//들어올린 인형은 바구니의 아래부터 쌓인다.
//만약 같은 모양의 인형 두개가 바구니에 연속해서 쌓이면 터진다.(사라짐)
//크레인으로 인형이 집어지지 않는 경우는 없다.

//아무 것도 없는 열에서 크레인을 작동하면 아무일이 발생하지 않는다.
//바구니 개수 제한은 없다.

//입력
//board: 게임화면(인형이 들어있는)격자: 2차원 배열
//moves 크레인을 작동시킨 위치가 담긴 배열

//출력
//주어진대로 크레인 모두 동작시켰을 때 터트려진 인형의 개수.

//board의 한변 크기 5<=N<=30
//board 내의 칸에는 0~100의 정수가 담겨있다.
//0은 빈칸, 1~100은 인형의 종류. 

//moves 배열 크기는 1~1000 원소는 1이상이며 N이하 자연수.

function countBurstAnimal(board, moves) {
  const basket = [];
  for (x of moves) {
    i = 0;
    while (i < board.length) {
      if (board[i][x-1]) {
        basket.push(board[i][x-1]);
        board[i][x-1] = 0;
        break;
      }
      ++i;
    }
  }
  console.log(basket)
  count=0;
  height=0;
  while(height < basket.length) {
    if (basket[height] == basket[height+1]) {
      basket.splice(height, 2);
      height--;
      count++;
    }
    else height++;
  }
  return count*2;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

console.log(countBurstAnimal(board, moves));