import React from "react";
import style from "./Message.module.css"

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={style.comment}>
                <div className={style.name}>{props.name}</div>
                <div>{props.message}</div>
            </div>
            <div className={style.time}>
                <div>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
