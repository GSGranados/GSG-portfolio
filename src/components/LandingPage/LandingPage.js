import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-container">
          <Cell col={12}>
            <img
              src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png"
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Self Taught Web Developer</h1>
              <hr></hr>
              <p>
                HTML/CSS | JS | React JS | Agile Methodology | Angular (Soon) | Node JS{" "}
              </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://linkedin.com/in/german-steven-granados-cruz-a2a29a196"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden={true}></i>
                </a>
                {/*Github*/}
                <a
                  href="https://github.com/GSGranados"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden={true}></i>
                </a>
                {/*Facebook*/}
                <a
                  href="https://www.facebook.com/stevengranados0211"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden={true}></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
