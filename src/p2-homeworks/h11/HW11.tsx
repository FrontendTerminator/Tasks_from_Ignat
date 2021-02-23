import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState([value1, 100]);

    const onChangeRange = (value: number) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }
    const onChangeRangeForSDR = (value: number | number[]) => {
        let x: any = value
        setValue1(x[0])
        setValue2(value as [])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value1={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.global}>
                <div className={s.second}>{value1}</div>
                <div className={s.second}>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    onChangeRangeForSDR={onChangeRangeForSDR}
                    value={value2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                </div>
                <div className={s.second}>{value2[1]}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
