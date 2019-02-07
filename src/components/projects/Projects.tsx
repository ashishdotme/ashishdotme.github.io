import React, { Component } from "react";
import projectsList from "../../data/projects";
import Project from "./Project";
export default class Projects extends Component {
  render() {
    const allProjects = projectsList.map(item => <Project />);
    console.log(allProjects);
    return (
      <div>
        <div className="container content-wrapper">
          <div className="columns is-multiline">{allProjects}</div>
        </div>
      </div>
    );
  }
}
