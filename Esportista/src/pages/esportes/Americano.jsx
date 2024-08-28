import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/layout/NavBar';
import styles from './Futebol.module.css'
import CardClube from '../../components/layout/CardClube';
import NavEsporte from '../../components/layout/NavEsporte';

const Americano = () => {

  return (
    <>
      <NavBar />
      <div className={styles.view}>
        <NavEsporte />
        <h1>Futebol Americano</h1>
      </div>
    </>
  );
};

export default Americano;