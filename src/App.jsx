import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Home, InfoTeam, PlayerRcmd} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect className="App-header">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                PlayerRcmd4Cartola
              </a>
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/players-rcmd" selected>
                <Glyphicon glyph="fire"/> Players recommendation
              </NavItem>

              <NavItem eventKey={1} href="/infoteam">
                <Glyphicon glyph="info-sign" /> Information about your team
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="App-content">
          <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />

                <Route path="/players-rcmd" component={PlayerRcmd} />

                <Route path="/infoteam" component={InfoTeam} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
