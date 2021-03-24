import React from 'react';
import './stylesheet/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import About from './pages/About'
import Music from './pages/Music'
import Post from './pages/Post'
import Stock from './pages/Stock'
import Footer from './components/Footer'
import { StateProvider } from './music-repo/utils/StateProvider';
import reducer, { initialState } from './music-repo/utils/reducer';
import Register from './login-repo/RegisterForm/Register'


function App() {

  return (
    // home page should be at the bottom
    <Router>
      <div className="App">
        <Switch>

          {/* login page */}
          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/register">
            <Header />
            <Register />
          </Route>

          {/* Portfolio */}
          <Route path="/about">
            <Header />
            <About />
          </Route>

          {/* music page */}
          <Route path="/music">
            <Header />
            <StateProvider initialState={initialState} reducer={reducer}>
              <Music />
            </StateProvider>
            {/* <Footer /> */}
          </Route>

          {/* stock page */}
          <Route path="/stock">
            <Header />
            <Stock />
            {/* <Footer /> */}
          </Route>

          {/* shit post page */}
          <Route path="/post">
            <Header />
            <Post />
            {/* <Footer /> */}
          </Route>

          {/* home page */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
