import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                alt="Avatar-resume"
                style={{ height: "200px" }}
              />
            </div>
            <h3 style={{ paddingTop: ".5em" }}>Steven Granados</h3>
            <h4 style={{ color: "grey" }}>Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Campamento Sn Antonio, Block B</p>
            <h5>Phone</h5>
            <p>(503) 7759-3611</p>
            <h5>Email</h5>
            <p>stevengranados0211 (gmail)</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2013}
              schoolName={"School 1"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            ></Education>
            <Education
              startYear={2014}
              endYear={2020}
              schoolName={"University"}
              schoolDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            ></Education>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2015}
              jobName={"1st Job"}
              jobDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            ></Experience>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName={"2nd Job"}
              jobDescription={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              }
            ></Experience>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={'Javascript'} progress={50}></Skills>
            <Skills skill={'Node JS'} progress={25}></Skills>
            <Skills skill={'HTML/CSS'} progress={50}></Skills>
            <Skills skill={'React JS'} progress={65}></Skills>
            <Skills skill={'English'} progress={85}></Skills>
          </Cell>
        </Grid>
      </div>
    );
  }
}
