// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) 로또의 최고순위와 최소순위
const Solution95 = () => {
  const lottos = [44, 1, 0, 0, 31, 25];
  const win_nums = [31, 10, 45, 1, 6, 19];

  // 💡 73.3점짜리내코드 굳이 배열을 안쓰고 filter로 더 간소화 할 수 있었다.
  // 사실 그냥 정답이라해도 무방한듯하다.

  // function solution(lottos, win_nums) {
  //   let answer = [];
  //   const maxScore = [];
  //   const minScore = [];

  //   const obj = {
  //     6 : 1,
  //     5 : 2,
  //     4 : 3,
  //     3 : 4,
  //     2 : 5,
  //     0 : 6,
  //   }

  //   lottos.forEach((a,i) => {
  //     if(win_nums.includes(a)){
  //       maxScore.push(a);
  //       minScore.push(a);
  //     }
  //     if(a === 0){
  //       maxScore.push(a);
  //     }
  //   })

  //   answer.push(obj[maxScore.length])
  //   answer.push(obj[minScore.length])

  //   return answer;
  // }

  function solution(lottos, win_nums) {
    const lottoResult = {
      0: 6,
      1: 6,
      2: 5,
      3: 4,
      4: 3,
      5: 2,
      6: 1,
    };
    // 0의 개수
    const eraseCount = lottos.filter((lotto) => lotto === 0).length;
    // 당첨번호와 같은 내 번호 개수
    const correctCount = lottos.filter((lotto) =>
      win_nums.includes(lotto)
    ).length;

    // 최대 당첨확률, 최소 당첨확률
    return [lottoResult[correctCount + eraseCount], lottoResult[correctCount]];
  }

  console.log(solution(lottos, win_nums));

  return <div></div>;
};

export default Solution95;
