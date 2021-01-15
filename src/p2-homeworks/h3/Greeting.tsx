import React from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (props) => {
    const inputClass = props.error === " Error " ? s.error : "";

    return (
        <div>
            <SuperInputText value={props.name}
                            onChange={props.setNameCallback}
                            className={inputClass}
                            error={props.error} // обавил из дз4
            />
            {/*<span className={s.span}>{props.error}</span>*/}
            <SuperButton onClick={props.addUser} className={s.button}>add</SuperButton>
            <span className={s.span}>{props.totalUsers}</span>
        </div>
    );
}

export default Greeting;
