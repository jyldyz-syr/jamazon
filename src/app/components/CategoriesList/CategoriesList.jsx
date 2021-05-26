import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../store/Actions/ActionCreator/CategoriesActionCreators";
import { useSelector } from 'react-redux'

const CategoriesList = () => {
  // const [categories, setCategories] = useState(null);
  const dispatch = useDispatch()
  const selectorState = useSelector((state) =>{console.log(state)})
  

  // useEffect(() => {
  //   dispatch(fetchCategories())
  // }, []);

  const styles = (id) => {
    return {backgroundColor: id%2? "red":"yellow"}
  }


  return (
    <div className="libraryList">
      <div className="libraryBook" style={styles(3)}>Book1</div>
    </div>
  );
};

export default CategoriesList;

//1)parse all categories 
//2) fetch from store all categories and display all categories in the components
