import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Steven Granados</h3>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me!</h3>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Podkova'}}>
                    <i className="fa fa-phone-square"/>
                    (503) 7759-3611
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily:'Podkova'}}>
                    <i className="fa fa-fax"/>
                    (503) 2272-6568
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily:'Podkova'}}>
                    <i className="fa fa-envelope"/>
                    stevengranados0211 (gmail)
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily:'Podkova'}}>
                    <i className="fa fa-facebook-square"/>
                    stevengranados0211
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
