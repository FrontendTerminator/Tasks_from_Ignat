import axios from "axios";

export const api = {
    post(checkboxValue: boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkboxValue})
    }
}
