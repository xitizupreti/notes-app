import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((curdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <Create passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};
export default App;
