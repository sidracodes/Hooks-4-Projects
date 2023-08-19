"use client";
import { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState([
    "Learn Next.js",
    "Learn HTML",
    "Start new sideproject",
  ]);
  const [item, setItems] = useState("");
  function removeItem(taskname) {
    setTasks(
      tasks.filter((task) => {
        return task != taskname;
      })
    );
  }
  function addItem() {
    if (item != "") {
      let temp = tasks;
      temp.push(item);
      setTasks(temp);
      setItems("");
    }
  }
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItems(e.target.value);
        }}
      />
      <button onClick={addItem}>Add</button>

      <ol>
        {tasks.map((currentElement) => {
          return (
            <>
              <li key={currentElement.index}>
                {currentElement}

                <button
                  onClick={() => {
                    removeItem(currentElement);
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
};

export default List;
