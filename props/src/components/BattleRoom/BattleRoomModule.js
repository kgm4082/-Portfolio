import React from 'react'
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import BattleRoomModuleCSS from './BattleRoomModule.module.css';
import rowComponentList from './rowComponentList';

function RowComponent () {
    return rowComponentList.map((prop) => (
        <Card className={BattleRoomModuleCSS.rowComponent} key={prop.id}>
            <Card.Header className={BattleRoomModuleCSS.header}>
                <p className='name'>{prop.name}</p>
                <p className='difficulty'>{prop.difficulty}</p>
            </Card.Header>
            <Card.Body className={BattleRoomModuleCSS.body}>
                <img className={BattleRoomModuleCSS.img} src={prop.img} />
                <Card.Title className={BattleRoomModuleCSS.description}>{prop.description}</Card.Title>
                <div className={BattleRoomModuleCSS.btns}>
                    <Button className={BattleRoomModuleCSS.btn}><Link to={`/BattleRoom/${prop.url}`}>PLAY</Link></Button>
                    <Button className={BattleRoomModuleCSS.btn}>HISTORY</Button>
                </div>
            </Card.Body>
        </Card>
    ))
}

function RowComponentDetail(props) {
    const params = useParams();
    console.log("params : ", params );
    
    return rowComponentList.map((prop) => (
        <Card className={BattleRoomModuleCSS.rowComponent} key={prop.id}>
            <Card.Header className={BattleRoomModuleCSS.header}>
                <p className='name'>{prop.name}</p>
                <p className='difficulty'>{prop.difficulty}</p>
            </Card.Header>
            <Card.Body className={BattleRoomModuleCSS.body}>
                <img className={BattleRoomModuleCSS.img} src={prop.img} />
                <Card.Title className={BattleRoomModuleCSS.description}>{prop.description}</Card.Title>
                <div className={BattleRoomModuleCSS.btns}>
                    <Button className={BattleRoomModuleCSS.btn}>PLAY</Button>
                    <Button className={BattleRoomModuleCSS.btn}>HISTORY</Button>
                </div>
            </Card.Body>
        </Card>
    ))
}

export { RowComponent, RowComponentDetail };