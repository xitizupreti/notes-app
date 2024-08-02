import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState(() => {
    // Retrieve items from localStorage, or initialize with an empty array
    const savedItems = localStorage.getItem("todos");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    // Save items to localStorage whenever addItem changes
    localStorage.setItem("todos", JSON.stringify(addItem));
  }, [addItem]);

  const addNote = (note) => {
    setAddItem((prevData) => [...prevData, note]);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => oldData.filter((_, index) => index !== id));
  };

  return (
    <>
      <Header />
      <Create passNote={addNote} />
      {addItem.map((val, index) => (
        <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      ))}
      <Footer />
    </>
  );
};
export default App;
