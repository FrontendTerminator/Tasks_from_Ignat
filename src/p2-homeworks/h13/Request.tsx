import React, {useState} from "react";
import {api} from "./api";
import s from "./Request.module.css"


export function Request() {

    const [checkboxValue, setCheckboxValue] = useState(false)
    const [responseApiValue, setResponseApiValue] = useState("")

    const onCheckboxChange = () => {
        setCheckboxValue(!checkboxValue)
    }

    const onButtonClick = () => {
        return api.post(checkboxValue)
            .then(res => {
                setResponseApiValue(res.data.errorText)
            })
            .catch(e => {
                setResponseApiValue(e.response.data.errorText)
            })
    }

    return (
        <div className={s.mainBlock}>
            <span>{responseApiValue}</span>
            <button
                className={s.button}
                onClick={onButtonClick}>Click</button>
            <input
                type={"checkbox"}
                onChange={onCheckboxChange}
                checked={checkboxValue}
            />
        </div>
    )
}