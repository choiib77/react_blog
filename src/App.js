// 터미널에 warning 뜨는거 보기싫으면
/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // state -> 웹이 app처럼 동작하게 만들고 싶어서 변수말고 state로 사용
  // state로 하면 새로고침이 아니고 자동으로 재렌더링이 된다.
  // 자주 변경되는 중요한 데이트는 state
  // var [a, b] = [10, 100]; a는 = 데이터 b = 변경되는 데이터
  let [글제목,글제목변경] = useState(['남자 코트 추천','여자 코트 추천', '아동 코트 추천']);
  let posts = '강남 고기 맛집';
  let [따봉, 따봉변경] = useState(0);
  function 함수 (){
    return 100
  }
  function 제목변경(){
    // 변경을 할 때 카피 본을 만들어야한다. var 에 먼저 담기
    var newArray = [...글제목];
    newArray = ['여자 코트 추천','남자코트','아동'];
    글제목변경(newArray);
  }
  // onclick = {클릭될 때 실행할 함수}
  // onclick = {() => {}}

  // 변수 만들어서 삽입 가능
  return (
    <div className="App">
      <div className='black-nav'>
        {/* 스타일 인라인은 괄호 두개 오브젝트로 사용 */}
        <div>개발 Blog</div>
      </div>
      {/* <img src={logo}/> */}
      <button onClick={제목변경}>버튼</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}} >👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
