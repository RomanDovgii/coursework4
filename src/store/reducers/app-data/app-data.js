import { ActionType } from "../../../utils/constants"
import { extend } from "../../../utils/functions";

const initialState = {
    currentPage: 1,
    works: [],
    visibleWorks: [],
    pages: 1,
    currentPage: 1,
    currentWork: 1,
    currentWorkData: {},
    sort: ``
}

const appData = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_WORKS:
            const newWorks  = [...action.payload];
            const newVisibleWorks = [...action.payload].slice((10*(state.currentPage-1)), (10*state.currentPage))
            const newPages = Math.ceil(action.payload.length / 10)
            return extend(
                state,
                {
                    works: newWorks,
                    visibleWorks: newVisibleWorks,
                    pages: newPages
                }
            )
        case ActionType.LOAD_WORK:
            const newCurrentWork  = {...action.payload};
            const newCurrentWorkId = action.payload.id
            return extend(
                state,
                {
                    currentWorkData: newCurrentWork,
                    currentWork: newCurrentWorkId
                }
            )
        case ActionType.CHANGE_PAGE:
            const newCurrentPage = action.payload;
            const updatedVisibleWorks = [...state.works].slice((10 * (action.payload - 1)), (10*(action.payload)));
            return extend(
                state,
                {
                    currentPage: newCurrentPage,
                    visibleWorks: updatedVisibleWorks,
                }
            )
        case ActionType.SORT:
            const newSort = action.payload;
            let sortedWorks = []
            switch (newSort) {
                case `date`:
                    sortedWorks = [...state.works]
                    sortedWorks.sort(function(a,b) {
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);
                        return Number(dateB) - Number(dateA);
                    })
                    break;
                case `title`:
                    sortedWorks =[...state.works]
                    sortedWorks.sort(function(a,b) {
                        const titleA = a.title.toUpperCase();
                        const titleB = b.title.toUpperCase();
                        if (titleA < titleB) {
                            return -1;
                        }
                        if (titleA > titleB) {
                            return 1;
                        }

                        return 0;
                    })
                    break;                   
                default:
                    sortedWorks =[...state.works]
                    sortedWorks.sort(function(a,b) {
                        return a.id - b.id;
                    })
                    break;
            }  
            const afterSortVisibleWorks = [...sortedWorks].slice(0, 10);
            return extend(
                state,
                {
                    works: sortedWorks,
                    visibleWorks: afterSortVisibleWorks,
                    currentPage: 1,
                    sort: action.payload,
                }
            )  
        case ActionType.RESET_PAGE:
            const resetPage = action.payload;
            return extend(
                state,
                {
                    currentPage: resetPage,
                }
            )  
        default:
            console.log(`not valid action`)
            break;
    }

    return state;
}

export {appData}