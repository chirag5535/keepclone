import React from "react";
import DeleteOutlineIcon from "@material-ui/icons//DeleteOutline";
import EditIcon from "@material-ui/icons//Edit";

const Notes = ({ search, addItem, searchResult, deleteEvent, editEvent }) => {
  return (
    <>
      {search.length === 0
        ? addItem.map((curVal) => {
            return (
              <div className="note" key={curVal.id}>
                <h1>{curVal.name.title}</h1>
                <br />
                <p>{curVal.name.content}</p>
                <img className="userImage" alt="" src={curVal.image} />
                <br />
                <button
                  className="btn"
                  title="DeleteItem"
                  onClick={() => deleteEvent(curVal.id)}
                >
                  <DeleteOutlineIcon className="deleteIcon" />
                </button>
                <button
                  className="btnEdit"
                  title="EditNote"
                  onClick={() => editEvent(curVal.id)}
                >
                  <EditIcon className="editIcon" />
                </button>
              </div>
            );
          })
        : searchResult.map((curVal) => {
            return (
              <div className="note" key={curVal.id}>
                <h1>{curVal.name.title}</h1>
                <br />
                <p>{curVal.name.content}</p>
                <img className="userImage" alt="" src={curVal.image} />
                <br />
                <button
                  className="btn"
                  title="DeleteItem"
                  onClick={() => deleteEvent(curVal.id)}
                >
                  <DeleteOutlineIcon className="deleteIcon" />
                </button>
                <button
                  className="btnEdit"
                  title="EditNote"
                  onClick={() => editEvent(curVal.id)}
                >
                  <EditIcon className="editIcon" />
                </button>
              </div>
            );
          })}
    </>
  );
};

export default Notes;
