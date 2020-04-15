import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-container">
        {/*Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" , marginBottom: "20px"}}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.tithink.com/wp-content/uploads/2018/11/logotipo-react.png) center/cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu>
              <IconButton style={{ color: "#fff" }} name="add"></IconButton>
            </CardMenu>
          </Card>

          {/*Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" , marginBottom: "20px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.tithink.com/wp-content/uploads/2018/11/logotipo-react.png) center/cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu>
              <IconButton style={{ color: "#fff" }} name="add"></IconButton>
            </CardMenu>
          </Card>

          {/*Project #3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginBottom: "20px" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.tithink.com/wp-content/uploads/2018/11/logotipo-react.png) center/cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu>
              <IconButton style={{ color: "#fff" }} name="add"></IconButton>
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <div>These are live Examples</div>;
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Live Examples</Tab>
        </Tabs>
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
}
