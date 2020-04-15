import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>Half page</Cell>
          <Cell col={6}> Half page</Cell>
        </Grid>
      </div>
    );
  }
}
