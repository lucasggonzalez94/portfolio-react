import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './styles/Menu.module.scss';

console.log(styles);

const Menu = () => {

    const [checked, setChecked] = useState(false);

    const changeInput = (e) => {
        debugger;
        const inputActive = e.target;
    
        if (inputActive.checked === true) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }

    return (
        <header className={`${styles.header}`}>
            <input
                type="checkbox"
                id={`${styles.active}`}
                defaultChecked={checked}
                onChange={(e) => changeInput(e)}
            />
            <label for={`${styles.active}`} className={`${styles.btn_menu}`}><MenuIcon /></label>
            <nav className={`${styles.navegacion}`}>
                <a href="#inicio" id="link-inicio">Inicio</a>
                <a href="#sobre_mi" id="link-sobre-mi">Sobre mí</a>
                <a href="#proyectos" id="link-proyectos">Proyectos</a>
                <a href="#contacto" id="link-contacto">Contacto</a>
            </nav>
        </header>
    );
}
 
export default Menu;