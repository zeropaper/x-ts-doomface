import React from "react"; // we need this to make JSX compile
import classNames from "classnames";

import classes from "./DoomFace.module.css";

export type levelNumber = 1 | 2 | 3 | 4 | 5 | 6;
// export type levelNumber = number;
export type variantLetter = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
// export type variantLetter = string;
export type DoomFaceProps = {
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
