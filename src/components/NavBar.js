import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import style from '../style/NavBar.module.css'

const Navbar = () => {
    const [user] = useAuthState(auth);

    return(
        <div className ={style.wraper}>
            <div className={style.content}>
                {user ?
                <button className={style.btn} onClick={() => auth.signOut()}>Exit</button> 
                : <button className={style.btn}><Link to="/register" style={{textDecoration: 'none', color: 'black'}}>Register</Link></button>}    
            </div>      
        </div>
    );
}

export default Navbar;