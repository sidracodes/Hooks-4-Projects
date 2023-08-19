import { useEffect, useState } from "react";

const Todos = () => {
  // get local data
  const getLocalData = () => {
    const lists = localStorage.getItem("todo item");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItems, setEditItems] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  // add items
  const addItems = () => {
    if (!data) {
      alert("Add the items please!");
    } else if (data && toggleButton) {
      setItems(
        items.map((currentElement) => {
          if (currentElement.id === editItems) {
            return { ...currentElement, name: data };
          }
          return currentElement;
        })
      );
      setData("");
      setEditItems(null);
      setToggleButton(false);
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        name: data,
      };
      setItems([...items, newItems]);
      setData("");
    }
  };
  // delete item
  const deleteItem = (id) => {
    const updatedItems = items.filter((currentElement) => {
      return currentElement.id !== id;
    });
    setItems(updatedItems);
  };
  // edit item
  const editItem = (id) => {
    const editedItem = items.find((currentElement) => {
      return currentElement.id === id;
    });

    setData(editedItem.name);
    setEditItems(id);
    setToggleButton(true);
  };
  // deleteAll
  const deleteAll = () => {
    if (items.length > 0) {
      setItems([]);
    } else {
      alert("TodoList is Already Empty");
    }
  };
  // adding local storage
  useEffect(() => {
    localStorage.setItem("todo item", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo logo" />
            <figcaption>Add Your List Here ✨ </figcaption>
          </figure>
          <div className="addItems">
            <input
              className="form-control"
              type="text"
              placeholder="😊Add Your items"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
            {toggleButton ? (
              <i
                className="far fa-edit add-btn"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            ) : (
              <i
                className="fa fa-plus add-btn"
                aria-hidden="true"
                onClick={addItems}
              ></i>
            )}
          </div>
          {/* show our items */}
          <div className="showItems">
            {items.map((currentElement) => {
              return (
                <div className="eachItem" key={currentElement.id}>
                  <h3>{currentElement.name}</h3>
                  <div className="todo-btn">
                    {/* edit item */}
                    <i
                      className="far fa-edit add-btn"
                      aria-hidden="true"
                      onClick={() => {
                        editItem(currentElement.id);
                      }}
                    ></i>
                    {/* delete item */}
                    <i
                      className="far fa-trash-alt add-btn"
                      aria-hidden="true"
                      onClick={() => {
                        deleteItem(currentElement.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* remove all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={deleteAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
