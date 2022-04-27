//10부제 : 자동차 번호 1의자리 수 = 날짜의 일의자리 수일 때
//해당 자동차 운행 금지.
//내 자동차 번호 일의자리수가 3이면 3, 13, 23일에 운전못함.

//10부제 위반하는 자동차가 몇 대인지 세어 출력하는 프로그램.
//날짜의 일의자리수, 7대의 자동차 번호 끝 두자리 수가 주어진다.

const date = 3;
const carNum = [25, 23, 11, 47, 17, 33];

const date2 = 0;
const carNum2 = [12, 20, 54, 30, 87, 91, 30];


function solution(date, carNum) {
  let count = 0;
  const carLastNum = carNum.map(num => num%10);

  carLastNum.forEach((num) => {
    if (num == date) {
      count += 1;
    }
  })
  console.log(count);
}

solution(date, carNum);
solution(date2, carNum2);