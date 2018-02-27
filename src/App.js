import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import styled from 'styled-components';

import STGlobal from './components/STGlobal';

import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage';

import './App.css';



const MainDiv = styled.div `
  color:#000;
  padding: 15px;
`;

const Links = () => (
  <nav>
    <NavLink exact activClassName = "active" to         = "/">Home</NavLink>
    <NavLink activClassName       = "active" to         = {{pathname: '/about'}}>About</NavLink>
    <NavLink activClassName       = "active" replace to = "/contact">Contact</NavLink>
  </nav>
);

const App = () =>(
  <Router>
    <STGlobal>
      <MainDiv>
        <Links />
        <Route exact path = "/" render        = {() => <HomePage /> } />
        <Route path       = "/about" render   = {() => <AboutPage /> } />
        <Route path       = "/contact" render = {() => <ContactPage /> } />
      </MainDiv>
    </STGlobal>
  </Router>
);

export default App;
