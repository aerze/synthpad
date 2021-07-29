import React from "react";

export function Grid(props) {
  return <div style={{  display: 'flex', flexDirection: 'column' }}>{props.children}</div>;
}

export function Row(props) {
  return <div style={{  display: 'flex' }}>{props.children}</div>;
}
