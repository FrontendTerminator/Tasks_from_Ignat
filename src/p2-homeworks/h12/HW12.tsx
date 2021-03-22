import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'custom'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (nameTheme: string) => {
        dispatch(changeThemeC(nameTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*<SuperSelect />*/}
            <SuperRadio
                onChangeOption={onChangeCallback}
                options={themes}
                value={theme}
            />
            <hr/>
        </div>
    );
}

export default HW12;
