import React from "react";

export function Grid(props) {
  return <div style={{ border: "4px solid green" }}>{props.children}</div>;
}

export function Row(props) {
  return <div style={{ border: "4px solid blue" }}>{props.children}</div>;
}
