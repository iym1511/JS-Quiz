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
import Sol12 from './JSalgorithm/재귀함수와 완전탐색(DFS:깊이우선탐색)/Sol12';
import Sol13 from './JSalgorithm/재귀함수와 완전탐색(DFS:깊이우선탐색)/Sol13';
import Sol14 from './JSalgorithm/재귀함수와 완전탐색(DFS:깊이우선탐색)/Sol14';
import Solution203 from './Programmers/Solution203';
// import Sol1 from './JSalgorithm/Dynamic programming/Sol1'
import Sol1 from './JSalgorithm/그래프와 탐색(DFS, BFS:너비우선탐색)/Sol1'
import Practice from './JSalgorithm/그래프와 탐색(DFS, BFS:너비우선탐색)/Practice';

// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Sol1 />
      {/* <Practice/> */}
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

