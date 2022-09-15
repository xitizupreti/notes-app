import React from "react";
const Create=()=>{
  return (
  <>
  <div className="main_note">
    <form>
        <input type='text' placeholder="Title" autoComplete="off" />
        <textarea rows='' column="" placeholder="Write Note.. "></textarea>
        <button>
            +
        </button>
    </form>

  </div>
  </>
  );
};

export default Create;
