import { ADD_NEW_ITEM, MARK_ITEM_DONE, UPDATE_CURRENT_NEW_ITEM } from "../constants/todo";

export const addNewItem = (newItem) => ({type: ADD_NEW_ITEM, newItem});
export const markItemDone = (item) => ({type: MARK_ITEM_DONE, item});
export const updateCurrentNewItem = (newItem) => ({type: UPDATE_CURRENT_NEW_ITEM, newItem: newItem});

