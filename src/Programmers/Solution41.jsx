// [카카오 인턴] 키패드 누르기
const Solution41 = () => {
  // 시작은 왼손엄지 * 오른손엄지 #
  // 서로 가운데 숫자패드는 더 가까운쪽이 Click

  let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
  let hand = "right";


  // function solution(numbers, hand) {
  //   let answer = "";
  //   let leftNum = [];
  //   let rightNum = [];
  //   let count = 0;

  //   for (let i = 0; i < numbers.length; i++) {
  //     // console.log(answer,Math.abs(numbers[i] - leftNum),leftNum ," / ",answer,Math.abs(numbers[i] - rightNum), rightNum)
  //     if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
  //       count = 0;
  //       answer += "L";
  //       leftNum.push(numbers[i])
  //     } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
  //       count = 1;
  //       answer += "R";
  //       rightNum.push(numbers[i])
  //     } else if (
  //       numbers[i] === 2 ||
  //       numbers[i] === 5 ||
  //       numbers[i] === 8 ||
  //       numbers[i] === 0
  //     ) {
  //       // console.log(Math.abs(numbers[i] - numbers[i - 1]), Math.abs(numbers[i] - numbers[i - 2]))
  //       // left = 8 right = 3 / 2 - 8 = 6 / 2 - 3 = 1 /
  //       // 5 - 4 = 1 / 5 - 9 = 4
  //       if (Math.abs(numbers[i] - leftNum[leftNum.length - 1]) < Math.abs(numbers[i] - rightNum[rightNum.length - 1])) {
          
  //         if(leftNum.includes(numbers[i]) && count === 0){
  //           count = 1;
  //           answer += 'R'
  //           console.log(answer)
  //         }else{
  //           count = 0;
  //           answer += 'L'
  //           leftNum.push(numbers[i])
  //         }

  //       }else{

  //         if(rightNum.includes(numbers[i]) && count === 1){
  //           count = 0;
  //           answer += 'L'
  //         }else{
  //           count = 1;
  //           answer += 'R'
  //           rightNum.push(numbers[i]);
  //         }

  //       }
  //     }
  //   }

  //   return answer;
  // }


const solution = (numbers, hand) => {
  const answer = [];

  // 왼쪽 스타트
  let leftHandPosition = '*';
  // 오른쪽 스타트
  let rightHandPosition = '#';

  numbers.forEach(number => {   
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftHandPosition = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightHandPosition = number;
      return;
    }

    // left 인자(4, 5), right 인자(3, 5)
    // 1
    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);
    console.log(leftHandDistance, rightHandDistance, " / ", leftHandPosition, number," / ",rightHandPosition, number);
    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer.push('R');
        rightHandPosition = number;
        return;
      }

      if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push('R');
      rightHandPosition = number;
    } 

    // 1 < 2 이기때문에 L
    if (leftHandDistance < rightHandDistance) {
      answer.push('L');
      leftHandPosition = number;
    }
  });

  return answer.join("");
};

const getDistance = (locatedNumber, target) => {
  // 객체의 첫번째 index =  세로 index
  // 객체의 두번째 index = 가로 index
  const keyPad = {
    1: [0, 0], 
    2: [0, 1], 
    3: [0, 2],
    4: [1, 0], 
    5: [1, 1], 
    6: [1, 2],
    7: [2, 0], 
    8: [2, 1], 
    9: [2, 2],
    '*': [3, 0], 
    0: [3, 1], 
    '#': [3, 2],
  }
  // 4 : [1, 0] / 3 : [0, 2]
  const nowPosition = keyPad[locatedNumber];
  // 5 : [1, 1] / 5: [1, 1]
  const targetPosition = keyPad[target];

  // 1 - 1 + 0 - 1 = 1 / 0 - 1 + 2 - 1 = 2 {결과 : 1과 2}
  return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

  console.log(solution(numbers, hand));

  return <div></div>;
};

export default Solution41;
