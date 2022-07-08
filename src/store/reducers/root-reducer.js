import {combineReducers} from "redux";
import { appData } from "./app-data/app-data";

export const NameSpace = {
    DATA: `DATA`
}

export default combineReducers({
    [NameSpace.DATA]: appData,
});