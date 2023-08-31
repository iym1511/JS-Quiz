const Quiz79 = () => {
  const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
  const n = parseInt(prompt("순회횟수는?"), 10);

  const rotate = (a, t) => {
    let b = a.slice(); // 배열복사
    let c = [];

    for (let i = 0; i < t; i++) {
      b.unshift(a.pop()); // 배열 마지막 요소를 맨앞으로 이동
    }
    for (let i in a) {
      // let i in b 로 해도됩니다.
      // a = [10,20,25,27,34] / b = [35,39,10,20,25]
      // a 는 b에 마지막 35,39 를 때줌 , b는 a에 마지막 35 39를 받음
      c.push(Math.abs(a[i] - b[i]));
    }
    //최솟값
    const m = Math.min.apply(null, c);

    //최솟값의 인덱스 구하기
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
  };

  console.log(rotate(l, n));

  return <div></div>;
};

export default Quiz79;
