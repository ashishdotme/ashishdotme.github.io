import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Free Bulma Templates</h1>
              <h2 className="subtitle">
                Based on the <a href="http://bulma.io">Bulma</a> CSS Framework
              </h2>
              <a
                className="github-button"
                href="https://github.com/dansup/bulma-templates"
                data-size="large"
                aria-label="View dansup/bulma-templates on GitHub"
              >
                View on Github
              </a>
              <a
                className="github-button"
                href="https://github.com/dansup/bulma-templates"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star dansup/bulma-templates on GitHub"
              >
                Star
              </a>
              <a
                className="github-button"
                href="https://github.com/dansup/bulma-templates/fork"
                data-size="large"
                data-show-count="true"
                aria-label="Fork dansup/bulma-templates on GitHub"
              >
                Fork
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
