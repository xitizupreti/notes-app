import React from "react";

const Note = ({ id, title, content, deleteItem }) => {
  return (
    <div id="grid">
      <div className="note">
        <h1>{title}</h1>
        <hr />
        <p>{content}</p>
      </div>
      <button onClick={() => deleteItem(id)} id="del">
        x
      </button>
    </div>
  );
};

export default Note;
