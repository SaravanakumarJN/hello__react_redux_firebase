import React from "react";
import { useSelector } from "react-redux";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";

const Home = () => {
  const [input, setInput] = React.useState("");

  const user = useSelector((state) => state.firebase.auth);
  const { uid } = user;

  const firestore = useFirestore();
  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: "todoList",
  });
  const todoList = useSelector((state) => state.firestore.data.todoList);

  const handleAddTask = () => {
    firestore.collection("users").doc(uid).collection("todos").add({
      taskName: input,
      completionStatus: false,
    });
  };

  return (
    <div>
      <div>
        <div>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={handleAddTask}>Add task</button>
        </div>
        <div>
          {todoList &&
            Object.entries(todoList)?.map((todo, i) => {
              return <div key={todo[0]}>{todo[1].taskName}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export { Home };
