import React from "react";

export function Button(props) {
  const { sm, fileName } = props;
  const [inst, id] = fileName.split("-");

  function handleClick() {
    sm.play(fileName);
  }

  return (
    <button
      style={{
        display: "flex",
        width: "25vw",
        height: "25vw",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {inst.toUpperCase()} {id}
    </button>
  );
}
