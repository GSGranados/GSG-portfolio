import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";
import Router from "./components/Router/Router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Steven Granados</Link>} scroll className="header-color">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Steven Granados</Link>}>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Router></Router>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
