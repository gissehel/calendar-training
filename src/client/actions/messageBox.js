import { CANCEL_MESSAGE, VALIDATE_MESSAGE_REQUESTED, VALIDATE_MESSAGE_RECEIVED, VALIDATE_MESSAGE_FAILED } from "../constants/messageBox";
import {} from "babel-polyfill";
import { sleep } from "../../common/utils/time";
import { call } from "./utils/api";

export const cancel = () => ({type: CANCEL_MESSAGE});
export const validate = () => async (dispatch) => {
    dispatch({type: VALIDATE_MESSAGE_REQUESTED});
    try {
        let result = await call('/messageBox/getData',{});
        let { values } = result.data;
        // let values = [...Array(5)].map(()=>Math.floor(Math.random()*5));
        dispatch({type: VALIDATE_MESSAGE_RECEIVED, values});
    } catch (err) {
        let error='An error has occured ['+err+']';
        log(error);
        dispatch({type: VALIDATE_MESSAGE_FAILED, message:error});
    }
};
