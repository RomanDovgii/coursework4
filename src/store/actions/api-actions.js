import { loadWork, loadWorks } from "./action";
import { ApiEndpoints } from "../../utils/constants";

export const FetchWorks = () => (dispatch, _getState, api) => (
    api.get(ApiEndpoints.WORKS)
    .then(({data}) => {
        dispatch(loadWorks(data));
    })
    .catch((err) => {
        console.log(err)
    })
)

export const FetchWork = (id) => (dispatch, _getState, api) => (
    api.get(ApiEndpoints.WORK+id)
    .then(({data}) => {
        dispatch(loadWork(data));
    })
    .catch((err) => {
        console.log(err)
    })
)

export const UploadWork  = (data) => (dispatch, _getState, api) => (
    api.post(ApiEndpoints.WORKS, {
        date: new Date(),
        title: data.title,
        description: data.description,
        cover: data.cover,
    }).then((response) => {
        FetchWorks()
    }).catch((err) => {
        console.log(err)
    })
)