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
import Server from './GraphQL/Server';
import Solution118 from './Programmers/Solution118';
import Solution119 from './Programmers/Solution119';
import Solution200 from './Programmers/Solution200';



// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Solution200/>
      {/* <Server/> */}
      {/* <Solution107/> */}
      <UseHooksTest></UseHooksTest>
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

