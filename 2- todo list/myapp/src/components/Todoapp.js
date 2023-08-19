import { useEffect, useState } from "react";

const Todoapp = () => {
  const getLocaldata = () => {
    const list = localStorage.getItem("todo item");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  // hooks
  const [data, setData] = useState("");
  const [item, setItem] = useState(getLocaldata());
  const [tooglebutton, setTogglebutton] = useState(false);
  const [edit, setEdit] = useState("");
  useEffect(() => {
    // adding local storage
    localStorage.setItem("todo item", JSON.stringify(item));
  }, [item]);

  // add item
  const additem = () => {
    if (!data) {
      alert("add item please!");
    } else if (data && tooglebutton) {
      setItem(
        item.map((currentElement) => {
          if (currentElement.id === edit) {
            return { ...currentElement, name: data };
          }
          return currentElement;
        })
      );
      setData("");
      setEdit(null);
      setTogglebutton(false);
    } else {
      const updateddata = {
        name: data,
        id: new Date().getTime().toString(),
      };
      setItem([...item, updateddata]);
      setData("");
    }
  };

  //  edit item
  const edititem = (id) => {
    const editeditem = item.find((currentElement) => {
      if (currentElement.id === id) {
        return currentElement.name;
      }
    });
    setData(editeditem.name);
    setTogglebutton(true);
    setEdit(id);
  };

  //  delete item
  const deleteitem = (id) => {
    const updateditem = item.filter((currentElement) => {
      return currentElement.id !== id;
    });
    setItem(updateditem);
  };

  //   remove all items
  const removeall = () => {
    setItem([]);
  };

  return (
    // user interface
    <div style={{ backgroundColor: "skyblue", height: "656px" }}>
      <center>
        <input
          style={{ marginTop: "100px" }}
          type="text"
          placeholder="add item"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        {tooglebutton ? (
          <button
            style={{ height: "50px", width: "50px", marginLeft: "30px" }}
            onClick={additem}
          >
            edit
          </button>
        ) : (
          <button
            style={{ height: "50px", width: "50px", marginLeft: "30px" }}
            onClick={additem}
          >
            add
          </button>
        )}

        {/* show items */}
        {item.map((currentEllement) => {
          return (
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              key={currentEllement.id}
            >
              <span style={{ fontSize: "20px" }}> {currentEllement.name}</span>
              <button
                style={{ height: "50px", width: "50px", marginLeft: "30px" }}
                onClick={() => edititem(currentEllement.id)}
              >
                edit
              </button>
              <button
                style={{ height: "50px", width: "50px", marginLeft: "30px" }}
                onClick={() => deleteitem(currentEllement.id)}
              >
                delete
              </button>
            </div>
          );
        })}
        <button
          style={{
            height: "50px",
            width: "100px",
            marginLeft: "30px",
            display: "block",
          }}
          onClick={removeall}
        >
          remove all
        </button>
      </center>
    </div>
  );
};

export default Todoapp;
