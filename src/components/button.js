import React from "react";

export function Button(props) {
  const { audio, fileName } = props;
  const [inst, id] = fileName.split('-');
  
  function handleClick() {
    audio.play(fileName);
  }

  return (
      <button
        style={{ display: 'flex', width: '25vw', height: '25vw', textAlign: 'center'}}
        onClick={handleClick}
      >{inst.toUpperCase()} {id}</button>
  );
}
