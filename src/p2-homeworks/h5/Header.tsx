import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import MenuIcon from '@material-ui/icons/Menu';
import s from "./Hw5.module.css"


function Header() {
    let [collapsed, setCollapsed] = useState<boolean>(true)

    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={!collapsed ? s.collapsed : ""}>
            <div className={s.btn}>
                <button
                    className={s.button}
                    onClick={changeCollapsed}><MenuIcon/></button>
            </div>
            {!collapsed && <Navbar/>}
        </div>
    );
}

export default Header;


function Navbar() {
    let [onStyleNavlink1, setOnStyleNavlink1] = useState<boolean>(true)
    let [onStyleNavlink2, setOnStyleNavlink2] = useState<boolean>(false)

    const changeStyleNavlink1 = () => {
        setOnStyleNavlink1(true)
        setOnStyleNavlink2(false)
    }
    const changeStyleNavlink2 = () => {
        setOnStyleNavlink2(true)
        setOnStyleNavlink1(false)
    }

    return (
        <div className={s.navlinks}>
            <div className={s.navlink}>
                <NavLink
                    onClick={changeStyleNavlink1}
                    className={onStyleNavlink1 ? s.navlinkColor1 : ""}
                    to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink
                    onClick={changeStyleNavlink2}
                    className={onStyleNavlink2 ? s.navlinkColor2 : ""}
                    to={PATH.PRE_JUNIOR_PLUS}>PreJunior+</NavLink>
            </div>
            {/*<div className={s.navlink}><NavLink to={"/none"}>lol</NavLink></div>*/}
        </div>
    )
}