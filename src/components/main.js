import React, { useEffect, useState } from "react";
import { Grid, Row } from "./grid";
import { Button } from "./button";

export function Main(props) {
  const [state, setHookState] = useState({ ready: false, volume: 50 });
  const setState = o => setHookState(s => ({...s, ...o}));

  useEffect(() => {
    const updateState = () => setState({ ready: true }); 
    props.audio.addEventListener("ready", updateState);
    return () => {
      props.audio.removeEventListener('ready', updateState)
    }
  }, [props.audio, state]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "1.2em" }}>
        <h2>{state.ready ? "Ready" : "Loading Audio Files"}</h2>
        <label htmlFor="volume">Volume: {state.volume}</label>
        <input
          id="volume"
          style={{ width: "100%" }}
          type="range"
          min="1"
          max="100"
          value={state.volume.toString()}
          onChange={(event) => {
            setState({ volume: event.target.value });
            props.audio.setVolume(event.target.value);
          }}
        />
      </div>
      <Grid>
        <Row>
          <Button audio={props.audio} fileName="bongo-1" />
          <Button audio={props.audio} fileName="conga-1" />
          <Button audio={props.audio} fileName="shaker-1" />
          <Button audio={props.audio} fileName="shaker-2" />
        </Row>
        <Row>
          <Button audio={props.audio} fileName="snare-1" />
          <Button audio={props.audio} fileName="snare-2" />
          <Button audio={props.audio} fileName="snare-3" />
          <Button audio={props.audio} fileName="snare-4" />
        </Row>
        <Row>
          <Button audio={props.audio} fileName="snare-5" />
          <Button audio={props.audio} fileName="snare-5" />
          <Button audio={props.audio} fileName="snare-5" />
          <Button audio={props.audio} fileName="snare-5" />
        </Row>
        <Row>
          <Button audio={props.audio} fileName="bongo-1" />
          <Button audio={props.audio} fileName="conga-1" />
          <Button audio={props.audio} fileName="shaker-1" />
          <Button audio={props.audio} fileName="shaker-2" />
        </Row>
      </Grid>
    </div>
  );
}
