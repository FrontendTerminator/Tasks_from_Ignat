const CHANGE_LOADING_VALUE = "CHANGE-LOADING-VALUE"

type LoadingReducerStateType = {
    loading: boolean
}

const initState: LoadingReducerStateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: LoadingACType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        case CHANGE_LOADING_VALUE: {
            return {...state, loading: action.loadingValue}
        }
        default:
            return state;
    }
};

type LoadingACType = {
    type: "CHANGE-LOADING-VALUE"
    loadingValue: boolean
}

export const loadingAC = (loadingValue: boolean): LoadingACType => {
    return {type: CHANGE_LOADING_VALUE, loadingValue}
};