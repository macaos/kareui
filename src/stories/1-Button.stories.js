import React, { Fragment } from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import Tab, { TabLink, TabPane } from "../component/Tab";
import "../scss/Main.scss";

export default {
  title: "Button",
  component: Button
};

export const Text = () => {
  return (
    <Fragment>
      <Button onClick={action("clicked")}>Hello Button</Button>
      <Tab>
        <ul>
          <TabLink>tab1</TabLink>
          <TabLink>tab2</TabLink>
          <TabLink>tab3</TabLink>
        </ul>
        <ul>
          <TabPane>cont1</TabPane>
          <TabPane>cont2</TabPane>
          <TabPane>cont3</TabPane>
        </ul>
      </Tab>
    </Fragment>
  );
};

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
