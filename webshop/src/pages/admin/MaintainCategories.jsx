import React, { useEffect, useRef, useState } from "react";
// import categoriesFromFile from "../../data/categories.json";
import config from "../../data/config.json";

function MaintainCategories() {
  // []
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoryDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(config.categoryDbUrl,{"method": "PUT", "body": JSON.stringify(categories)});
  };

  const deleteCategory = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(config.categoryDbUrl,{"method": "PUT", "body": JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Uue kategooria nimi</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Sisesta</button> <br />
      {categories.map((element, index) =>
        <div key={index}>
          {element.name} <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  );
}

export default MaintainCategories;
