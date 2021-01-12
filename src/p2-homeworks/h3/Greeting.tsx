import React from "react";
import s from "./Greeting.module.css";

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
            <input value={props.name}
                   onChange={props.setNameCallback}
                   className={inputClass}
            />
            <span className={s.span}>{props.error}</span>
            <button onClick={props.addUser} className={s.button}>add</button>
            <span className={s.span}>{props.totalUsers}</span>
        </div>
    );
}

export default Greeting;
