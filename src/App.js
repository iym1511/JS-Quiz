import loadable from '@loadable/component';
import './App.css';
import UseHooksTest from './hooks';
import UseTitle from './hooks/UseTitle';
import UseClick from './hooks/UseClick';
import Solution112 from './Programmers/Solution112';
import UseFadeIn from './hooks/UseFadeIn';
import Solution113 from './Programmers/Solution113';

// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Solution113/>
      <UseHooksTest></UseHooksTest>
      <UseTitle></UseTitle>
      <UseClick></UseClick>
      <UseFadeIn/>
    </div>
  );
}

export default App;

