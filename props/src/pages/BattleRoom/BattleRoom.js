import React from 'react';
import Head from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import {RowComponent, RowComponentDetail} from '../../components/BattleRoom/BattleRoomModule';
import BattleRoomCSS from './BattleRoom.module.css';
import rowComponentList from '../../components/BattleRoom/rowComponentList';

const BattleRoom = () => {
  return (
    <div id='wrap'>
      <Head />
      <div className={BattleRoomCSS.title}>Battle Rooms</div>
      <div className={BattleRoomCSS.cont}>
      <RowComponent />
      </div>
    </div>
  );
};
const BattleRoomDetail = () => {
  return (
    <div id='wrap'>
      <Head />
      <div className={BattleRoomCSS.title}>Battle Rooms</div>
      <div className={BattleRoomCSS.cont}>
      {/* <RowComponentDetail /> */}
      </div>
    </div>
  );
};

export { BattleRoom, BattleRoomDetail };