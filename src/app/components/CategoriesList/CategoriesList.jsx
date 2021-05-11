import React from "react";


const CategoriesList = () => {
 
  const styles = (id) => {
    console.log("works")
    return {backgroundColor: id%2? "red":"yellow"}
  }

  return (
    <div className="libraryList">
      <div className="libraryBook" style={styles(1)}>Book1</div>
      <div className="libraryBook" style={styles(2)}>Book1</div>
      <div className="libraryBook" style={styles(3)}>Book1</div>
      <div className="libraryBook" style={styles(4)}>Book1</div>
      <div className="libraryBook" style={styles(5)}>Book1</div>
      <div className="libraryBook" style={styles(6)}>Book1</div>
      <div className="libraryBook" style={styles(3)}>Book1</div>
      <div className="libraryBook" style={styles(3)}>Book1</div>
    </div>
  );
};

export default CategoriesList;
