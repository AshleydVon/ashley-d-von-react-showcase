import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;