import React from "react";
import { css } from "emotion";
import classnames from "classnames";
import "../scss/Main.scss";
import "./storybook.scss";

export default {
  title: "Design/Color"
  //   component: Button,
};

export const Text = () => {
  const colorInfo = {
    main: [
      { code: "#4066E3", className: "blue" },
      { code: "#9F40DB", className: "orchid" },
      { code: "#EB003B", className: "applered" }
    ],
    gray: [
      { code: "#000000", className: "black" },
      { code: "#333333", className: "gray-800" },
      { code: "#373737", className: "gray-700" },
      { code: "#575757", className: "gray-600" },
      { code: "#7E7E7E", className: "gray-500" },
      { code: "#A7A7A7", className: "gray-400" },
      { code: "#D2D2D2", className: "gray-300" },
      { code: "#E6E6E6", className: "gray-200" },
      { code: "FFFFFF", className: "white" }
    ]
  };
  return (
    <div className="storybook">
      <h3>Main Color</h3>
      <div className="color-chip row">
        <div
          className={classnames([
            css`
              background-color: #4066e3;
            `,
            "_color col"
          ])}
        >
          color
        </div>
        <div className="_info col">
          <ul>
            <li>#333333</li>
            <li>.gray-800</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
