import React, { Component } from "react"
import { Switch, BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import AddTutorial from "./components/add-tutorial.component"
import Tutorial from "./components/tutorial.component"
import TutorialsList from "./components/tutorials-list.component"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <Routes className="container mt-3">
          {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
