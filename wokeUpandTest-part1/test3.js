//문제3 : 섬으로 건너가라!

// 1. 한 배에는  탈 수 있는 인원이 정시에는 25명, 10분마다 15명씩 탈 수 있습니다.
// 2. 배는 매일 9시부터 21시 전까지(21시를 포함하지 않습니다) 10분단위로 들어옵니다. 
// 3. 전체 대기 인원은 14,000,605명입니다. 우리는 14,000,606번째와 14,000,607번째에 배를 타게 됩니다. 앞사람이 아프거나, 대기를 못하고 빠질 경우 대기인원이 줄어들 수도 있습니다. **라이캣과 자바독이 다른 배를 타야 할 경우에는 뒷배를 타야 합니다.**
// 4. 1월은 1024일, 2월은 512일, 3월은 256일, 4월은 128일, 5월은 64일, 6월은 32일, 7월은 16일, 8월은 8일, 9월은 4일, 10월은 2일이며, 10월까지밖에 없습니다.
// 5. 시간의 개념은 동일합니다. (하루는 24시간, 1시간 60분, 1분 60초)
//     - **현재 날짜는 2020년 1월 1일 입니다.**
// 6. 배에 타는 순간 자바독이 화장실이 급하다 하여 화장실에 갔으며, 현재시간에 '분'만큼 배 출발이 늦어졌습니다.
// 7. 배는 휴일도 동일하게 운항됩니다. 배는 천재지변에 영향을 받지 않습니다. 마법으로 날아다니거든요.
// 8. **라이캣과 자바독이 배에 타는 날짜를 구하세요.**

const waitingLine = 14000605;
function solution (waitingLine) {
  // 우리 순서는 waㅑtingLine 다음 +1, +2번째

  // 정각 ~ 50분마다 타는 인원 : 25 + 15 + 15 + 15 + 15 + 15  = 100명
  const hourLimit = 100;
  // 하루에 타는 인원 : 9시정각 ~ 20시 50분 : 1200명
  const dayLimit = 1200;
  //1년의 일수 : 1024 + 512 + 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2;
  const aYear = (2 ** 11) - 1 - 1; //2046
  //일년에 타는 사람 수
  const yearLimit = aYear * dayLimit;//2455200
  // 기다리는 데에 몇 년이 넘는지 걸린다.
  const waitingYear = Math.floor((waitingLine / yearLimit), ); // 5
  //let restLine = ((waitingLine - (waitingYear * yearLimit))); //1724605
  let restLine = waitingLine % (waitingYear * yearLimit)
  //현재는 2020 1월 1일
  //남은 줄 인원에서 1월부터 각 수용인원을 빼가면서 어느 달에 탈 수 있는지 계산
  let waitingMonth = 0;
  for (let i = 10; i > 0; i--) {
    //주의:for문에서 두번째 조건은 for문이 지속되는 조건이다.(끝나는 조건이 아님)  
    if (restLine -= (2**i * dayLimit) <= 0) {//해당 월의 일수 x 하루 수용인원을 남은 대기인원에서 뺀다.
      console.log(`${11-i}월`); //해당 월 안에 배를 탄다. 2월.
      waitingMonth = 10-i;
      break;
    } else {
      restLine -= (2**i * dayLimit)
    }
  }
  console.log(restLine, '바깥  restLine 숫자는?')
  //해당월의 몇일 몇시?
  const waitingDay = Math.floor((restLine / dayLimit)); // 1437일
  // restLine -= waitingDay * dayLimit; //기다린 일수만큼 빼준다. 
  restLine = restLine % dayLimit; //205
  const waitingHour = Math.floor((restLine / hourLimit)); // 2  다른케이스 고려해서 계산할 수 있는 것도 계산식 만들기.
  restLine = restLine % hourLimit; // 5
  if(restLine == 14) {
    console.log("라이캣과 자바독은 다른 배를 타야합니다...")
  }
  //2020년 1월 1일 기준으로 9시부터 승선 시작했다고 가정,
  // 현재 시각의 현재 '분'만큼 딜레이 되었음 => 현재시간의 분을 가져와서 추가한다. (딜레이가되었다고 해도 21시까지 스케쥴있어서 22시전에 끝남)
  //Date객체를 사용할 수 있는지 묻는 부분임.
  let waitingMinutes = 0;
  if (restLine > 25) {
    waitingMinutes = ((restLine-10) % 6) * 10;
  } //25보다 작은 인원인 경우 정각에 탄다.
  
  const realTime = new Date() //현재시각
  realTimeMinutes = realTime.getMinutes();

  let boardingYear = 2020 + waitingYear;
  let boardingMonth = 1 + waitingMonth;
  let boardingDate = 1 + waitingDay;
  let boardingHour = 9 + waitingHour;
  let boardingMinutes = realTimeMinutes + waitingMinutes;
  if (boardingMinutes >= 60) {
    boardingMinutes -= 60;
    boardingHour += 1;
  } 

  console.log(`탑승하는 날짜와 시간은 ${boardingYear}년 ${boardingMonth}월 ${boardingDate}일 ${boardingHour}시 ${boardingMinutes}분 입니다.`)

  // realTime.setFullYear(2020 + waitingYear);
  // realTime.setMonth(waitingMonth);
  // realTime.setDate(1 + waitingDay);
  // realTime.setHours(9 + waitingHour);
  // realTime.setMinutes(realTime.getMinutes() + waitingMinutes);
  //date객체를 이용해 더하면 한달 일수 기준이 현실과 같아서 안된다..
}

solution(waitingLine)
// 입력
// 대기인원 = 14000605

// 출력
// 2025년 2월 413일 11시 0분 출발

// 입력
// 대기인원 = 1200202

// 출력
// 2020년 1월 1000일 11시 0분 출발