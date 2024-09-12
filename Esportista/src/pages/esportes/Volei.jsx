import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/layout/NavBar';
import styles from './Futebol.module.css'
import NavEsporte from '../../components/layout/NavEsporte';

const Volei = () => {

  return (
    <>
      <NavBar />
      <div className={styles.view}>
        <h1>Volei</h1>
      </div>
    </>
  );
};

export default Volei;