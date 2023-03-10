import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./drop.css"

function App(props){
    const [ pick, setpick ] = useState(props.routes);
    const [ select, setSelect ] = useState([]);
    
    function slidedown(prop_id){
        const listdiv = document.querySelectorAll(".listR-ul");
        const select_div = document.getElementById(prop_id);
        if(select_div.id === prop_id){
            if(select_div.classList.contains('showdrop')){
                select_div.classList.remove('showdrop');
            }else{
                select_div.classList.add('showdrop');
            }
        }
    }

    return pick.map((prop) => (
        <div className="button_container" key={prop.id}>
            <Button
            onClick={() => {
                if(!select.includes(prop.id)){
                    setSelect((select) => [...select, prop.id]);
                }
                slidedown(prop.id);
            }}
            className="btn-list" variant="secondary">
            {prop.name}
            </Button>
            <div className="listR-ul" id={prop.id}>
                <ul>
                    {props.listR.map((sel,num)=>{
                        if(prop.id === props.listR[num].id){
                            return (
                                <li key={num}>{props.listR[num].name}</li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
      ));
}

export default App;