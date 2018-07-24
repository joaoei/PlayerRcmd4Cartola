
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
              <a href="/">PlayerRcmd4Cartola</a>
              {/*
                  - Show cartola market closure
                      # Status: 2 = close
                      https://api.cartolafc.globo.com/mercado/status
                  - Most scaled players in the round and the partial score
                      https://api.cartolafc.globo.com/mercado/destaques
                      and
                      https://api.cartolafc.globo.com/atletas/pontuados
                  - Round Games
                    https://api.cartolafc.globo.com/partidas
              */}
            </Navbar.Brand>

            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/players-rcmd" selected>
                <Glyphicon glyph="fire"/> Players recommendation
                  {/*
                    https://api.cartolafc.globo.com/partidas
                    e
                    https://api.cartolafc.globo.com/atletas/mercado
                  */}
              </NavItem>

              <NavItem eventKey={1} href="/infoteam">
                <Glyphicon glyph="info-sign" /> Information about your team
                  {/*
                    https://api.cartolafc.globo.com/times?q=
                    and
                    https://api.cartolafc.globo.com/time/slug/
                    and
                    https://api.cartolafc.globo.com/esquemas
                  */}
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
