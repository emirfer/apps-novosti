import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Javascript from "./components/Javascript/index";
import Python from "./components/Python/index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <Router>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">APPs NOVOSTI</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <NavLink exact to="/" activeClassName="active">
                Početna
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/javascript" activeClassName="active">
                Javascript
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/python" activeClassName="active">
                Python
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/informacije" activeClassName="active">
                Informacije
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={App} />
      <Route exact path="/javascript" component={Javascript} />
      <Route exact path="/python" component={Python} />
      <Route exact path="/informacije" component={Informacije} />
    </div>
  </Router>
);

const Informacije = () => (
  <div>
    <h2>EmirFer, &copy; 2019. Sarajevo, BiH</h2>
    <h3>Front-side React app sa lodash.js i besplatnim online Api</h3>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
