import loadable from '@loadable/component';
import './App.css';
import Solution104 from './Programmers/Solution104';
import Solution105 from './Programmers/Solution105';
import Solution106 from './Programmers/Solution106';
import Solution107 from './Programmers/Solution107';
import Solution108 from './Programmers/Solution108';
import Solution109 from './Programmers/Solution109';
import Solution110 from './Programmers/Solution110';
import Solution97 from './Programmers/Solution97';
import UseHooksTest from './hooks';

// const Test = loadable(() => import('./Programmers/Solution93'));

  function App() {
  return (
    <div className="App">
      <Solution110/>
      <UseHooksTest></UseHooksTest>
    </div>
  );
}

export default App;

