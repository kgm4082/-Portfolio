// import Main from './component/main/main';
import Main from './component/main/test';
// import Menubar from './component/main/menubar';
import Menubar from './component/select/selectGnb';
import routes from './component/main/routes';
import lostr from './component/select/lostR';
import Loading from './component/loading/loading';
import Info from './component/info/info';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const asia = document.querySelector(".asia .box");
    const europe = document.querySelector(".europe .box");
    const north_america = document.querySelector(".north_america .box");

    const asia_lnb = document.querySelector(".asia .lnb");
    const europe_lnb = document.querySelector(".europe .lnb");
    const north_america_lnb = document.querySelector(".north_america .lnb");



    asia.addEventListener('click',function(){
      europe_lnb.classList.add("displayNone");
      north_america_lnb.classList.add("displayNone");
      asia_lnb.classList.toggle("displayNone");

    })
    europe.addEventListener('click',function(){
      asia_lnb.classList.add("displayNone");
      north_america_lnb.classList.add("displayNone");
      europe_lnb.classList.toggle("displayNone");

    })
    north_america.addEventListener('click',function(){
      asia_lnb.classList.add("displayNone");
      europe_lnb.classList.add("displayNone");
      north_america_lnb.classList.toggle("displayNone");

    })
    Main()
  },[]);
  return (
    <>
      {/* <Loading /> */}
      <div id="sidebar">
      <h3>SELECT A REGION</h3>
        <Menubar routes={routes} listR={lostr}/>
      </div>
      <div id="container">
        <canvas id="c"></canvas>
        <div id="labels"></div>
        <div className='header banselect'>
          <h2>WORLD MAP <br />CYBER MISSIONS </h2>
          <p>SELECT A MISSION TO BEGIN</p>
          <h3 className='cname'></h3>
        </div>
         <div className='select banselect'>
          <h3>SELECT A REGION</h3>
          <ul>
            <li id="asia" className='asia'>
              <div className='box'>
                <div className='name'>ASIA</div>
                <div className='num'>04</div>
              </div>
              <ul className='lnb displayNone'>
                <li className='m1 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M1-Disable Botnet</p>
                </li>
                <li className='m9 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M9-Manipulate Lndustrial Control System</p>
                </li>
                <li className='m12 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M12-Defend Againist Web Attacks</p>
                </li>
                <li className='m13 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M13-Power Grid Incident Responce</p>
                </li>
              </ul>
            </li>
            <li className='europe'>
                <div className='box'>
                    <div className='name'>EUROPE</div>
                    <div className='num'>06</div>
                </div>
                <ul className='lnb displayNone'>
                  <li className='m2 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M2-Stop Terrorist Financing</p>
                  </li>
                  <li className='m3 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M3-Interecept Attack Plans</p>
                  </li>
                  <li className='m4 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M4-Stop Malicious Processes</p>
                  </li>
                  <li className='m5 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M5-Protect Financial institution</p>
                  </li>
                  <li className='m6 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M6-Respond to Phising & Exfiltration</p>
                  </li>
                  <li className='m10 lock'>
                  <img src={require('./component/images/lockSvg.svg').default} alt="" />
                  <p className='text'>M10-Ransomware</p>
                  </li>
                </ul>
            </li>
            <li className='north_america'>
                <div className='box'>
                    <div className='name'>NORTH AMERICA</div>
                    <div className='num'>03</div>
                </div>
                <ul className='lnb displayNone'>
                  <li className='stella'>
                  <img src={require('./component/images/stellaSvg.svg').default} alt="" />
                  <p className='text'>Assessments</p>                 
                  </li>
                  <li className='school'>
                    <img src={require('./component/images/shcoolSvg.svg').default} alt="" />
                    <p className='text'>Battle School</p>
                  </li>
                  <li className='scenario'>
                  <img src={require('./component/images/scenarioSvg.svg').default} alt="" />
                  <p className='text'>M42-INTRODUCTION SCENARIO</p>
                  </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;