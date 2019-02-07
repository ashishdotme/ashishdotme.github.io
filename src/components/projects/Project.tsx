import React, { Component } from "react";

const Project = (props: any) => {
  return (
    <div className="column is-3 desktop-only">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span>
              Admin <small>(Light)</small>
            </span>
            <span className="is-pulled-right">
              <a href="https://github.com/jgthms/bulma/releases/tag/0.7.2">
                <span className="tag is-default is-primary">v0.7.2</span>
              </a>
              <span className="tag is-default is-info">
                <i className="fas fa-desktop" title="Desktop support" />
              </span>
              <span className="tag is-default is-info">
                <i className="fas fa-mobile-alt" title="Mobile support" />
              </span>
            </span>
          </p>
        </header>
        <div className="card-content">
          <figure className="image">
            <img src="images/admin.png" alt="Admin template screenshot" />
          </figure>
        </div>
        <footer className="card-footer">
          <a href="templates/admin.html" className="card-footer-item">
            Preview
          </a>
          <a
            href="https://github.com/dansup/bulma-templates/blob/master/templates/admin.html"
            className="card-footer-item"
          >
            Source Code
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Project;
