import React, { useState } from "react";

const Create = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.name;

    const { name, value } = event.target;
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    if (note.title.length > 0 && note.content.length > 1) {
      props.passNote(note);
      setnote({
        title: "",
        content: "",
      });
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
            onChange={InputEvent}
            placeholder="Title"
            autoComplete="off"
          />
          <textarea
            rows=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            column=""
            placeholder="Write Note.. "
          ></textarea>
          <button onClick={addEvent} id="ins">
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
