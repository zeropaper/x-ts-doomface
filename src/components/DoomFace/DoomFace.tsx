import React from "react"; // we need this to make JSX compile
import classNames from "classnames";

import * as classes from "./DoomFace.module.css";
type levelNumber = 1 | 2 | 3 | 4 | 5 | 6;
type variantLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type DoomFaceProps = {
  level: levelNumber;
  variant: variantLetter;
};

export const DoomFace = ({ level, variant }: DoomFaceProps) => (
  <span className={classes.root}>
    <span
      className={classNames(
        classes.sprite,
        classes[`level-${level}`],
        classes[`variant-${variant}`]
      )}
    />
  </span>
);
