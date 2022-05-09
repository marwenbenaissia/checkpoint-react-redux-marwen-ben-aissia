import { UPDATE_FILTER } from "../Constants/filterReducerActions-types"
export const setFilterAction =(value) =>({
    type: UPDATE_FILTER,
    payload: value
})