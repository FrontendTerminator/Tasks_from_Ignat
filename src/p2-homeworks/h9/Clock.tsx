import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);
    const [showTime, setShowTime] = useState<boolean>(false);


    const stop = () => {
        clearInterval(timerId)
        setShowTime(false)
    }
    const start = () => {
        stop();
        setShowTime(true)
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    const seconds = date?.getSeconds()
    const minutes = date?.getMinutes();
    const hours = date?.getHours();
    const day = date?.getDate();
    const months = date?.getMonth();
    const year = date?.getFullYear();

    return (
        <div>
            {showTime
                ? <div
                    className={s.time}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {hours} : {minutes} : {seconds}
                </div>
                : <div className={s.offTime}>Time</div>}

            {show && (
                <div className={s.date}>
                    {day} {months} {year}
                </div>
            )}
            <div className={s.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    );
}

export default Clock;
