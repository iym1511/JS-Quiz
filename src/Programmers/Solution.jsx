const Solution2 = () => {
  function solution(name, yearning, photo) {
    return photo.map((v) =>
      v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
    );
  }

  // c : photo 를 순차적으로 지남
  // name.indexOf(c) : name안에 c가 어디 위치의 index값인지 찾아줌

  // 첫번째 배열 순회
  // 0,1,2,3
  // yearning[0],[1],[2],[3]
  // 0,5 / 5,10 / 15,1 / 16,3 

  // 두번째 배열 순회
  // 0,1,-1,-1
  // yearning[0],[1],0,0
  // 0,5 / 5,10 / 15,0 / 15,0

  // 세번째 배열 순회
  // -1, 2, 0, -1
  // 0, yearning[2],[0], 0
  // 0,0 / 0,1 / 1,5 / 6,0


  // 결과
  // [19,15,6]

  let name = ["may", "kein", "kain", "radi"];
  let yearning = [5, 10, 1, 3];
  let photo = [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ];

  console.log(solution(name, yearning, photo));

  const asd = ["a","b","c","d"];
  const a = [1,2,3,4]
  console.log(a.reduce((a,b) => (console.log(a,b)),0))

  return <div></div>;
};

export default Solution2;
