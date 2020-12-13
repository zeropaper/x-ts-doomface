import React, { Ref } from 'react';
import classNames from 'classnames';

import classes from './DoomFace.module.css';

export type LevelNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type VariantLetter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type DoomFaceProps = {
  level: LevelNumber;
  variant: VariantLetter;
};
export type ElementCenter = {
  x: number;
  y: number;
};

export const DoomFace = React.forwardRef(({
  level,
  variant,
}: DoomFaceProps, ref: Ref<HTMLElement>) => (
  <span ref={ref} className={classes.root}>
    <span
      className={classNames(
        classes.sprite,
        classes[`level-${level}`],
        classes[`variant-${variant}`],
      )}
    />
  </span>
));

export type MouseFollowingDoomFaceProps = {
  level: LevelNumber;
};

export function getElementCenter(el: HTMLElement): ElementCenter {
  const {
    x,
    y,
    width,
    height,
  } = el.getBoundingClientRect();
  return {
    x: x + (width * 0.5),
    y: y + (height * 0.5),
  };
}

export const MouseFollowingDoomFace = ({ level }: MouseFollowingDoomFaceProps) => {
  const ref = React.useRef<HTMLElement>(null);
  const [variant, setVariant] = React.useState<VariantLetter>('a');

  React.useEffect(() => {
    const mouseMoveListener = (evt: MouseEvent) => setVariant(() => {
      if (!ref.current) return 'a';

      const faceCenter = getElementCenter(ref.current);
      const lookingLeft = faceCenter.x > evt.clientX;
      const lookingFarHorizontally = Math.abs(faceCenter.x - evt.clientX) > 100;

      if (lookingLeft && lookingFarHorizontally) return 'g';
      if (lookingLeft && !lookingFarHorizontally) return 'f';
      if (!lookingLeft && lookingFarHorizontally) return 'h';
      if (!lookingLeft && !lookingFarHorizontally) return 'd';

      return 'a';
    });

    document.addEventListener('mousemove', mouseMoveListener);

    return () => {
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  });

  return (
    <DoomFace
      ref={ref}
      level={level}
      variant={variant}
    />
  );
};
