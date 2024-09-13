import React from 'react';
import styles from './styles/Footer.module.css';

function Footer() {
    return (<>
    <div className={styles.footerTodo}>
        <footer className={styles.footer}>

            <div>
            <a href="#" class="redesocial"><span> <i class="icon icon-facebook"></i>/FugaDasGalinhas</span></a>
            <a href="#" class="redesocial"><span> <i class="icon icon-instagram"></i>/tropadoG</span></a>
            <a href="#" class="redesocial"><span> <i class="icon icon-twitter"></i>/calilGargamel</span></a>
            <a href="#" class="redesocial"><span> <i class="icon icon-pinterest"></i>/pedroOsurdo</span></a>


            </div>
        </footer>
        </div>
    </>
    )
}

export default Footer;