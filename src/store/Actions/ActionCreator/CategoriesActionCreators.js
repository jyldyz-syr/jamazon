//1) explain needed action
//2) create action creator to fetch categories
//3) send request and accept res and dispatch to store 
import axios from "axios"
import { SET_CATEGORIES_LIST } from "../Types"


export const fetchCategories = () => async (dispatch) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/categories/getall`)
        dispatch({
            type: SET_CATEGORIES_LIST,
            payload: res.data.categories
        })
    } catch (error) {
        console.log(error)
    }
 
}

