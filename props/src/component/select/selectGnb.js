import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import './select.css'

function App(props){
    const [ pick, setpick ] = useState(props.routes);
    const [ select, setSelect ] = useState([]);
    
    function slidedown(prop_id){
        const listdiv = document.querySelectorAll(".lnb");
        const select_div = document.getElementById(prop_id);
        if(select_div.id === prop_id){
            select_div.classList.toggle("showdrop");
            console.log(select_div.id);
        }
    }

    return pick.map((prop) => (
        <div className="button_container" key={prop.id}>
            <button onClick={() => {
                if(!select.includes(prop.id)){
                    setSelect((select) => [...select, prop.id]);
                }
                slidedown(prop.id);
            }}
            className="btn-list" variant="secondary">
                <div className="name">{prop.name}</div>
                <div className="num">{prop.num}</div>
            </button>
            <div className="lnb" id={prop.id}>
                <ul>
                    {props.listR.map((sel,num)=>{
                        if(prop.id === props.listR[num].id){
                            return (
                                <>
                                <li key={num} className={props.listR[num].type}>
                                    <img />
                                    <p className="text">{props.listR[num].name}</p>
                                    </li>
                                </>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
      ));
}

export default App;