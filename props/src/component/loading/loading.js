import './loading.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function Loading(){

    const [progressNow, setProgressNow] = useState(0)

    const loading = document.querySelector('.loading');
    const loadingBar = document.querySelector('.loading-bar');


    const updateProgressNowHandler = setInterval(() => {
        if (progressNow >= 100 ){
         setProgressNow(100)
         clearInterval(updateProgressNowHandler)
         loading.classList.add('loaded')
         loadingBar.classList.add('loaded')
        }
        setProgressNow(s => s+1)
       }, 500)

    return (
        <>
            <div className="loading">
                <ProgressBar   now={progressNow} min="0" max="100" className='loading-bar w-25 position-absolute bottom-0 start-50 translate-middle' />;
            </div>
        </>
    )
}

export default Loading;