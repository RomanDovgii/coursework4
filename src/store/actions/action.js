import { ActionType } from "../../utils/constants";

export const loadWorks = (works) => ({
    type: ActionType.LOAD_WORKS,
    payload: works
});

export const loadWork = (work) => ({
    type: ActionType.LOAD_WORK,
    payload: work
});

export const changePage = (page) => ({
    type: ActionType.CHANGE_PAGE,
    payload: page
})

export const changeSort = (sort) => ({
    type: ActionType.SORT,
    payload: sort
})

export const setPage = (page) => ({
    type: ActionType.SORT,
    payload: page
})

export const resetPage = () => ({
    type: ActionType.SORT
})