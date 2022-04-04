import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CreateNotes from "./CreateNotes";
import Notes from "./Notes";
import Footer from "./Footer";

const App = () => {
  const getLocalStorage = () => {
    let list = localStorage.getItem("lists1");
    // console.log(list);
    if (list) {
      return JSON.parse(localStorage.getItem("lists1"));
    } else {
      return [];
    }
  };
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [addItem, setAddItem] = useState(getLocalStorage([]));
  const [toogle, setToggle] = useState(true);
  const [editData, setEditData] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const imageInputRef = React.useRef();

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    if (note && !toogle) {
      setAddItem(
        addItem.map((elem) => {
          if (elem.id === editData) {
            return { ...elem, name: note };
          }
          return elem;
        })
      );
      setToggle(true);
      imageInputRef.current.value = "";
      setImageUrl(null);
      setNote({
        title: "",
        content: "",
      });
      setEditData(null);
      setOpen(false);
    } else {
      setAddItem((oldData) => {
        const allData = {
          id: new Date().getTime().toString(),
          name: note,
          image: imageUrl,
        };
        return [...oldData, allData];
      });
      imageInputRef.current.value = "";
      setImageUrl(null);

      setNote({
        title: "",
        content: "",
      });
    }
  };

  const deleteEvent = (id) => {
    setAddItem((preData) => {
      return preData.filter((elem) => {
        return id !== elem.id;
      });
    });
  };
  const editEvent = (id) => {
    const editData = addItem.find((elem) => {
      return elem.id === id;
    });
    console.log(editData);
    setToggle(false);
    setNote(editData.name);
    setEditData(id);
    setOpen(true);
  };
  const setExpand = () => {
    setOpen(true);
  };
  const backToNormal = () => {
    setOpen(false);
  };

  const searchEvent = (event) => {
    const data = event.target.value;
    // console.log(data);
    setSearch(data);

    if (data !== "") {
      const searchNotes = addItem.filter((elem) => {
        const allSearchData = {
          tempTitle: elem.name.title,
          tempData: elem.name.content,
        };
        // console.log(allSearchData);
        return Object.values(allSearchData)
          .join("")
          .toLowerCase()
          .includes(data.toLowerCase());
      });
      // console.log(searchNotes);

      setSearchResult(searchNotes);
    } else {
      setSearchResult(addItem);
      setAddItem(addItem);
      // console.log(addItem);
    }
  };

  useEffect(() => {
    localStorage.setItem("lists1", JSON.stringify(addItem));
  }, [addItem]);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <Header />
      <div className="main_note" onDoubleClick={backToNormal}>
        <SearchBar searchEvent={searchEvent} search={search} />
        <CreateNotes
          note={note}
          inputEvent={inputEvent}
          setExpand={setExpand}
          addEvent={addEvent}
          toogle={toogle}
          open={open}
          setSelectedImage={setSelectedImage}
          imageInputRef={imageInputRef}
        />
      </div>
      <Notes
        search={search}
        addItem={addItem}
        searchResult={searchResult}
        deleteEvent={deleteEvent}
        editEvent={editEvent}
      />
      {/* <Footer /> */}
    </>
  );
};

export default App;
