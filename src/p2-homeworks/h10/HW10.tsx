import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import gif from "./gif.gif"

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const changeLoadingOnFalse = () => {
        dispatch(loadingAC(false))
    }

    const setLoading = () => {
        dispatch(loadingAC(true))
        //setTimeout(dispatch(loadingAC(false)),2000) - так не работает почему то
        setTimeout(changeLoadingOnFalse, 2000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={gif} alt={"gif"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
