import React, { Component, useRef, useEffect } from "react";

const Tab = (props: any) => {
  //   const refTabLink: React.MutableRefObject<null>[] = [];
  /* console.log("props.children[1]", props.children[1].props.children[1]);
  const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child)
  );
  console.log("props.children[2]", children);
  //   return <div>{children}</div>;
  let lefss = useRef(null);
  const childElement = React.Children.only(props.children[1].props.children[1]);
  setTimeout(() => {
    console.log("lefss", lefss.testMethod());
  });
  return React.cloneElement(childElement, {
    ref: (el: React.MutableRefObject<null>) => (lefss = el)
  }); */
  /* const children = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, {
      ref: (el: React.MutableRefObject<null>) => (refTabLink[index] = el)
    })
  );
  setTimeout(() => {
    console.log("aaaaa", refTabLink[0].children[1].testMethod());
  }); */
  const refLinks: React.MutableRefObject<null>[] = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];
  const refPanes: React.MutableRefObject<null>[] = [];
  //   const tabLinks = props.children[0];
  //   const tabPanes = props.children[1];
  const tabLinks = React.Children.map(
    props.children[0].props.children,
    (child, index) => {
      //   const ur = useRef(null);
      return React.cloneElement(child, {
        ref: (el: React.MutableRefObject<null>) => (refLinks[index] = el)
      });
    }
  );
  const tabPanes = React.Children.map(
    props.children[1].props.children,
    (child, index) =>
      React.cloneElement(child, {
        ref: (el: React.MutableRefObject<null>) => (refPanes[index] = el)
      })
  );

  useEffect(() => {
    console.log("refTabPanes", refPanes[1]);
    // setTimeout(() => {
    //   console.log("refTabPanes2", refTabPanes[1]);
    // }, 100);
  }, []);

  return (
    <div>
      <ul>{tabLinks}</ul>
      <ul>{tabPanes}</ul>
    </div>
  );

  /* return React.cloneElement(childElement, {
    ref: (el: React.MutableRefObject<null>) => (lefss = el)
  }); */
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
