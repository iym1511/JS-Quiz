const Quiz62 = () => {
  //abcdefgh
  //20190923
  const user_s = "aacdddddddddfffffffffgghhh";
  
  // 0 부분은 null 이나 undefind로 나오기때문에 Number 처리
  console.log(
    `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
      user_s.match(/c/g).length
    }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
      user_s.match(/f/g).length
    }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
  );


  // /a/: 이 정규 표현식은 문자열 내에서 문자 "a"를 찾는 역할을 합니다.
  // g: 정규 표현식의 g 플래그는 전역 검색을 나타냅니다. 이 플래그를 사용하면 문자열 전체에서 패턴과 일치하는 모든 부분을 찾습니다.
  

  return <></>;
};

export default Quiz62;
