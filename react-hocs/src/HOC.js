import React, { Component } from "react";

/**
 *
 * This exports one default function which returns a modified component.
 * This function takes two arguments: component and data.
 */

export default function Hoc(HocComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
    }
    render() {
      return (
        <div>
          <HocComponent data={this.state.data} {...this.props} />
        </div>
      );
    }
  };
}
