import React from 'react'

//Style
import styles from "./NavBar.module.css"

export const NavBar = ({handler}) => {
    return (
        <div className={styles.container} >
            <div className={styles.titleCon} >CHEKHABAR</div>
            <div className={styles.btnCon}  onClick={handler} >
                <h3>Logout</h3>
            </div>
        </div>
    )
}
