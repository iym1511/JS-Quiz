// 캐시(LRU 캐시교체알고리즘)

const Solution202 = () => {
  const cacheSize = 3;
  const cities = [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ];

  const solution = (cacheSize, cities) => {
    let answer = 0;
    let arr = [];

    //1. 도시를 모두 대문자로 통일한다.(정확하게 확인?)
    cities = cities.map((it) => it.toUpperCase());

    //2. 캐시사이즈가 0이면 모든게 cache miss 이므로 *5로 리턴한다.
    if (cacheSize == 0) return cities.length * 5;

    //3. 배열을 순회하며 cache hit이면 배열의 맨뒤로 푸시하고
    // cache miss일때는 (배열이 꽉찼다면 맨앞을 제거하고) 배열의 맨뒤로 푸시한다.
    for (let i = 0; i < cities.length; i++) {
      const idx = arr.findIndex((it) => it === cities[i]);
      // console.log(arr);
      if (idx !== -1) {
        arr.splice(idx, 1); // 찾은 index부분 제거
        answer += 1;
      } else if (arr.length === cacheSize) {
        answer += 5;
        arr.shift();
      } else {
        answer += 5;
        console.log(arr, [i], idx)
      }
      arr.push(cities[i]);
    }
    return answer;
  };

  console.log(solution(cacheSize, cities));

  return <div></div>;
};

export default Solution202;
