import axios from "axios";
import { SET_PRODUCT} from "../Types";

export const getProduct = (item) => async (dispatch) => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/books/${item}`)

      dispatch({
          type: SET_PRODUCT,
          payload: res.data
      })


  } catch (error) {
      console.log(error)
  }
};
