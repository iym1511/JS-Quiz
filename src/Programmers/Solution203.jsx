// (정렬)가장 큰 수
const Solution203 = () => {
  // const arr1 = [[1, 4], [3, 2], [4, 1]];
  // const arr2 = [[3, 3], [3, 3]];



  // 허접한 내코드
  // function solution(numbers) {
  //   var answer = "";
  //   let ary = [];
  //   let str = []
  //   let n = 0;

  //   while (numbers.length > n) {
  //     for (let i = n; i < n + numbers.length; i++) {
  //       str.push(numbers[i%numbers.length])
  //     }
  //     ary.push(Number(str.join('')));
  //     ary.push(Number(str.reverse().join('')))
  //     str = []
  //     n++;
  //   }
  //   console.log(ary)
  //   answer += Math.max(...ary)

  //   return answer;
  // }


  const numbers = [3, 30, 34, 5, 9]; // 9534330
  // const numbers = [6, 10, 2];

  function solution(numbers) {
    let answer_list = [];
    for (let n of numbers){
      answer_list.push(n.toString());
    }
    // 내림차순
    // 둘을 빼서 +면 (⭐️):() -면 ():(⭐️) 가 return되는방식
    answer_list.sort((a, b) => {
      return  (b + a) - (a + b);
    });

    return answer_list.join("")[0] == "0" ? "0" : answer_list.join("");
  }
  console.log(solution(numbers));

  return <div></div>;
};

export default Solution203;
