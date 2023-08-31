const Quiz81 = () => {

  //첫번째 풀이
  let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";
  let sp = value.split('\n'); // 문단 나눠진 부분을 기준으로 배열만듦
  let count = 0;

  for(let i of sp){
    sp[count] = i.replace('1', 'f').split(' '); // 1을f로 반환하고 split으로 배열을5개로 나눔
    count += 1;
  }

  count = 0;
  let search = 0;

  for(let s of sp){ // s = 배열별 출력
    for(let i of s){ // i = 배열안의 리스트 출력
      // 0번째 배열의 1번째, 2번째 배열의 3번째, 3번째 배열의 2번째 순서대로 if문 작용
      if(i === 'f'){ 
        search = s.indexOf(i);
        // 1. 1 > 0 실행
        if (search > 0){
          s[search-1] = '*'; // 2. s[0] = '*'
        }
        // 3. 1 < 4 실행
        if (search < 4){
          s[search+1] = '*'; // 4. s[2] = '*' [첫번쨰 줄에서 지뢰표시]
        }
        if (count > 0){
          sp[count-1][search] = '*';
        }
        // 5. 0 < 4 실행
        if (count < 4){
          sp[count+1][search] = '*'; // 6. sp[1][1] [첫번째줄 f 아래의 지뢰표시] !반복!
        }
      }
    }
    count += 1
  }

  // 출력
  for (let i of sp){
    console.log(i);
  }

  // console.log(value);
  // console.log(sp);

  return <div></div>;
};

export default Quiz81;
