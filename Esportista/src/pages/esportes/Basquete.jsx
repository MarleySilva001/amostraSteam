import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/layout/NavBar';
import styles from './Futebol.module.css'
import NavEsporte from '../../components/layout/NavEsporte';

const Basquete = () => {

  return (
    <>
      <NavBar />
      <div className={styles.view}>
        <NavEsporte />
        <h1>Basquete</h1>
      </div>
    </>
  );
};

export default Basquete;