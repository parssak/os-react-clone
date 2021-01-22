import './App.scss';
import Application from './Application';
import Dock from './Dock';

function App() {
  return (
    <div className="os">
      This is the os
      <Application />
      <Application />
      <Application />
      <Dock/>
   </div>
  );
}

export default App;
