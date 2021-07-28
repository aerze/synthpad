import React from "react";
import { Button } from "./button";
import { Grid, Row } from "./grid";

export function Main() {
  return (
    <div>
      <Grid>
        <Row>
          <Button />
          <Button />
          <Button />
          <Button />
        </Row>
        <Row>
          <Button />
          <Button />
          <Button />
          <Button />
        </Row>
        <Row>
          <Button />
          <Button />
          <Button />
          <Button />
        </Row>
        <Row>
          <Button />
          <Button />
          <Button />
          <Button />
        </Row>
      </Grid>
    </div>
  );
}
