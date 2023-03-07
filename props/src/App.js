import Main from './component/main/main';
import Loading from './component/loading/loading';
import Select from './component/select/select';
import Info from './component/info/info';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Main()
  },[]);
  return (
    <>
      {/* <Loading /> */}
      <div id="container">
        <canvas id="c"></canvas>
        <div id="labels"></div>
        <div className='header banselect'>
          <h2>WORLD MAP <br />CYBER MISSIONS </h2>
          <p>SELECT A MISSION TO BEGIN</p>
          <h3 className='cname'>USA</h3>
        </div>
        <Select />
      </div>
    </>
  );
}

export default App;
