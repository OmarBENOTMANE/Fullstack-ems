import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
        <div className="p-3 mb-2 bg-primary text-white">All Rights Reserved 2020</div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
