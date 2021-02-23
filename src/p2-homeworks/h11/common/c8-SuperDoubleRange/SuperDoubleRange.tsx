import React, {ChangeEvent} from "react";
import {Slider, makeStyles} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number) => void
    value?: number[]
    onChangeRangeForSDR: (value: number | number[]) => void
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function valuetext(value: number) {
    return `${value}°C`;
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, onChangeRangeForSDR
        // min, max, step, disable, ...
    }
) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }
    // сделать самому, можно подключать библиотеки


    const classes = useStyles();
    //const [valueUI, setValueUI] = React.useState([10, 37]);

    const handleChange = (event: any, newValue: number | number[]) => {
        console.log(event)
        onChangeRangeForSDR(newValue)
        //setValueUI(newValue as number[]);
    };


    return (
            <div className={classes.root}>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    color={"primary"}
                />
            </div>
    );
}

export default SuperDoubleRange;
