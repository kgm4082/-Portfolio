import React from 'react';
import Head from '../../components/Header/Header';
import { MenuTree, Menu, Remocon } from '../../components/Jeojag/JeojagModule';
const Jeojag = () => {
  return (
    <div id='wrap'>
      <Head />
      <div className='cdc'>
        <MenuTree />
        <div className='eee'>
          <div className='menu'>
            <Menu />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jeojag;