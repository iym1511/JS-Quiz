const Quiz86 = () => {
  const name = "손오공 야모챠 메지터 비콜로".split(" ");
  const point = "70 10 55 40".split(" ");
  const point_int = point.map((a) => parseInt(a, 10));

  let obj = {};

  const sol = (name, point) => {
    let temp = [];
    for (let i of name) {
      let obj = {};
      obj["name"] = i; // name : '손오공'
      obj["value"] = point[name.indexOf(i)]; // value : 70 (indexOf는 특정 위치의 배열의 index값을 알려줌)
      temp.push(obj);
    }

    // value 기준으로 내림차순 정렬 // https://developer-talk.tistory.com/73
    temp.sort((a, b) => {
      console.log(a.value, b.value);
      return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
    });

    console.log(temp);

    let result = {};
    // 내림차순된 배열을 index+1 을 해 순위로 바꿔줌
    for (let i of temp) {
      result[i["name"]] = temp.indexOf(i) + 1;
    }

    return result;
  };

  console.log(sol(name, point_int));


  // score.forEach((element, index) => {
  //   obj[name[index]] = element
  // });

  // for(let i in score){
  //   obj.sort((a,b) => b-a);
  //   console.log(Number(i)+1)
  // }

  // console.log(Object.values(obj).sort((a, b) => b - a));

  return <div></div>;
};

export default Quiz86;
