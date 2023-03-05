import Main from './component/main/main';
import Loading from './component/loading/loading';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Main();
  },[]);
  return (
    <>
      {/* <Loading /> */}
      <div id="container">
        <canvas id="c"></canvas>
        <div id="labels"></div>
        <div className='header'>
          <h2>WORLD MAP <br />CYBER MISSIONS </h2>
          <p>SELECT A MISSION TO BEGIN</p>
          <h2>USA</h2>
        </div>
        <div className='select'>
          <h4>SELECT A REGION</h4>
        </div>
        <div className='interface'></div>
        <div className='chat'></div>
        <div className='footer'>
          <div className='logo'>
            {/* <img src=''/> */}
          </div>
          <div className='info'>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
