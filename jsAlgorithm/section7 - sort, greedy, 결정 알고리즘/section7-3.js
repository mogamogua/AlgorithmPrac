//Special Sort(구글 인터뷰)

//N개의 정수가 입력되면, 입력값을 정렬한다.
//음의 정수는 앞, 양의정수는 뒤에.
//입력된 음의정수 양의정수 각각의 순서는 그대로.

//0은 입력되지 않는다.

const numbers = [1,2,3,-3,-2,5,6,-6];

function specialSort(numbers) {
  let queue = [];
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < 0) {
      queue.push(...numbers.splice(i,1)); //배열에서 없애는 동시에 queue에넣는다.
      i--;
    }
  }  
  //음수를 queue에 넣는것이 끝나면
  queue.push(...numbers); //양수를 한꺼번에 넣는다.
  return queue;
}

console.log(specialSort(numbers))

