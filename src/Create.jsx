import React, { useState } from "react";

const Create = ({ passNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = ({ target: { name, value } }) => {
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = () => {
    if (note.title && note.content) {
      passNote(note);
      setNote({ title: "", content: "" });
    } else {
      alert("Please Type a Title & Description.");
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="main_note">
        <div>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="Write Note.. "
          ></textarea>
          <button onClick={handleSubmit} id="ins">
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
