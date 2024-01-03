import loadable from '@loadable/component';
import './App.css';
import UseHooksTest from './hooks';
import UseTitle from './hooks/UseTitle';
import UseClick from './hooks/UseClick';
import UseFadeIn from './hooks/UseFadeIn';
import UseScroll from './hooks/UseScroll';
import UseFullscreen from './hooks/UseFullscreen';
import UseNotification from './hooks/UseNotification';
import UseAxiosTest from './hooks/UseAxiosTest';
import Solution115 from './Programmers/Solution115';
import Solution107 from './Programmers/Solution107';
import Solution116 from './Programmers/Solution116';
import Solution117 from './Programmers/Solution117';
// import Server from './GraphQL/Server';
import Solution118 from './Programmers/Solution118';
import Solution119 from './Programmers/Solution119';
import Solution200 from './Programmers/Solution200';
import Solution201 from './Programmers/Solution201';
import Solution202 from './Programmers/Solution202';
import Sol1 from './JSalgorithm/효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)/Sol1';
import Sol2 from './JSalgorithm/효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)/Sol2';
import Sol3 from './JSalgorithm/효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)/Sol3';
import Sol4 from './JSalgorithm/효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)/Sol4';




// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Sol4/>
      {/* <Solution118/> */}
      {/* <Server/> */}
      {/* <Solution107/> */}
      {/* <UseHooksTest></UseHooksTest> */}
      {/* <UseTitle></UseTitle> */}
      {/* <UseClick></UseClick> */}
      {/* <UseFadeIn/> */}
      {/* <UseFullscreen/> */}
      {/* <UseNotification /> */}
      {/* <UseAxiosTest /> */}
      {/* <UseScroll/> */}
    </div>
  );
}

export default App;

