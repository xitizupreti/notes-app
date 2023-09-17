import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <><div id="grid">
      <div className="note">
        <h1>{props.title}</h1>
        <hr />
        <p>{props.content}</p>
      </div>
      <button onClick={deleteNote} id="del">
        x
      </button>
      </div>
    </>
  );
};

export default Note;