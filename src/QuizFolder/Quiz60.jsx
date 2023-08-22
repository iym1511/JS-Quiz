const Quiz60 = () => {
  const students = [
    "강은지",
    "김유정",
    "박현서",
    "최성훈",
    "홍유진",
    "박지호",
    "권윤일",
    "김채리",
    "한지호",
    "김진이",
    "김민호",
    "강채연",
  ];
  
  // 이름순으로 정렬
  students.sort()
  
  const arrays = []

  const test = () => {
    for(let i in students ){
      arrays.push({
        번호: i,
        이름: students[i]
      })
    }
  }

  console.log(test())
  console.log(arrays)

  return <div></div>;
};

export default Quiz60;
