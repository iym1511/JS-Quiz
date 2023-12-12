import loadable from '@loadable/component';
import './App.css';
import UseHooksTest from './hooks';
import UseTitle from './hooks/UseTitle';
import UseClick from './hooks/UseClick';
import Solution112 from './Programmers/Solution112';
import UseFadeIn from './hooks/UseFadeIn';
import Solution113 from './Programmers/Solution113';
import UseScroll from './hooks/UseScroll';
import UseFullscreen from './hooks/UseFullscreen';
import UseNotification from './hooks/UseNotification';
import Solution114 from './Programmers/Solution114';

// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Solution114/>
      <UseHooksTest></UseHooksTest>
      <UseTitle></UseTitle>
      <UseClick></UseClick>
      <UseFadeIn/>
      <UseFullscreen/>
      <UseNotification />
      <UseScroll/>

    </div>
  );
}

export default App;

