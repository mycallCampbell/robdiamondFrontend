import React, {useState} from 'react';

import styles from './MenuOpen.module.css';
import MenuLink from './MenuLink';

function MenuOpen({handleToggle}) {

    return (
        <>  
         <nav className={styles.navlist}>
            <ul>
                <li className={styles.linkCategory} onClick={handleToggle}>
                    <MenuLink urlLink={'/watches'} navName={'ROLEX WATCHES'} />
                </li>
                <li className={styles.linkCategory} onClick={handleToggle}>
                    <MenuLink urlLink={'/contact'} navName={'CONTACT'}/>
                </li>
            </ul>
        </nav>    
        </>
    )
}

export default MenuOpen
