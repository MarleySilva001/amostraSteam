import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/layout/NavBar';
import styles from './Futebol.module.css'
import NavEsporte from '../../components/layout/NavEsporte';

const Americano = () => {

  return (
    <>
      <NavEsporte 
      children={

        <h1>Futebol Americano</h1>
      
      } />
      
    </>
  );
};

export default Americano;