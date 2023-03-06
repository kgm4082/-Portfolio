import './info.css';
import logo from '../images/aresLogo.png';

function Info() {

    return (
        <div className="info">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="list">
                <ul>
                    <li className="report">
                    {/* <img src={require('../images/reportSvg.svg').default} alt="" />/ */}
                    <p className='text'>REPORTS(0)</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Info;