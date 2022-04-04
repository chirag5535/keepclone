import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons//Edit";

const CreateNotes = ({
  note,
  inputEvent,
  setExpand,
  addEvent,
  toogle,
  open,
  setSelectedImage,
  imageInputRef,
}) => {
  return (
    <>
      <form>
        {open ? (
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}

        <textarea
          type="text"
          placeholder="Write  a note..."
          name="content"
          value={note.content}
          onChange={inputEvent}
          onClick={setExpand}
        ></textarea>
        <input
          accept="image/*"
          type="file"
          id="select_image"
          name="image"
          ref={imageInputRef}
          onChange={(event) => setSelectedImage(event.target.files[0])}
        />

        {toogle ? (
          <Button title="AddNote" onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        ) : (
          <Button onClick={addEvent}>
            <EditIcon className="plus_sign" />
          </Button>
        )}
      </form>
    </>
  );
};

export default CreateNotes;
