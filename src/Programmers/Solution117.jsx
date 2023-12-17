// 의상(해시)
const Solution117 = () => {
  const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ];

  // const clothes = [
  //   ["crow_mask", "face"],
  //   ["blue_sunglasses", "face"],
  //   ["smoky_makeup", "face"],
  // ];

  const solution = (clothes) => {
    let answer = 0;
    let obj = {};

    clothes.forEach(([a, b]) => {
      if (!obj[b]) {
        obj[b] = [a];
      } else {
        obj[b].push(a);
      }
    });

    answer = 1; // 의상의 조합 수를 계산하기위해 변수 1로 초기화(곱셈을 하기위해)

    for (let key in obj) {
       // 이때 1을 더하는 이유는 해당 종류의 의상을 입지않는 경우를 고려하기 위함
       // 1. 2 / 2. 3 (원래옷종류에서 안입는경우도 1+ 해줘서 그럼)
        answer *= (obj[key].length + 1);
    }

    answer -= 1; // 모든 종류의 의상을 입지않는 경우는 없으니 1 빼줌

    return answer;
  };

  console.log(solution(clothes));

  return <div></div>;
};

export default Solution117;
