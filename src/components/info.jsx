import React from "react";
import { AppContextWrapper } from "../context/app-context/app-context";

export const Info = ({ username, id }) => {
  const { dispatch } = React.useContext(AppContextWrapper);
  const [editMode, setEditMode] = React.useState(false);
  const [newName, setNewName] = React.useState(username);

  const ochir = () => {
    dispatch({ type: "DELETE_USER", id });
  };

  const saqlash = () => {
    dispatch({ type: "UPDATE_USER", value: { id, username: newName } });
    setEditMode(false);
  };

  return (
    <div className="p-3 border rounded mb-3 flex items-center gap-3">
      {editMode ? (
        <input
          className="border p-1 rounded"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <h1 className="text-[14px] font-semibold">{username}</h1>
      )}

      <div className="flex gap-3">
        {editMode ? (
          <button onClick={saqlash} className="p-2 bg-green-600 text-white rounded">
            saqlash
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="p-2 bg-yellow-600 text-white rounded">
            update
          </button>
        )}

        <button onClick={ochir} className="p-2 bg-red-600 text-white rounded">
          ochirsh
        </button>
      </div>
    </div>
  );
};
