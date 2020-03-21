import React, { Component } from "react";

const Tab = (props: any) => {
  console.log(props.children[1]);

  return <div>{props.children}</div>;
};

export const TabLink = (props: any) => {
  return <li>{props.children}</li>;
};

/* export const TabPane = (props: any) => {
  return <li>{props.children}</li>;
}; */

export class TabPane extends Component {
  testMethod() {
    alert("test");
  }
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default Tab;

/* import React, { Component } from 'react';

class Tab extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Tab; */
