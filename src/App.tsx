import * as React from 'react';
import './styles.css';

import {
  DoomFace,
  MouseFollowingDoomFace,
  LevelNumber,
} from './components/DoomFace/DoomFace';

export default function App() {
  const faces = [
    'abcdefgh',
    'abcdefgh',
    'abcdefgh',
    'abcdefgh',
    'abcdefgh',
    'ab',
  ];

  const max = Math.max(...faces.map((variants) => variants.length));

  return (
    <div className="App">
      <div>
        This is project is just a little experiment aimed to learn TypeScript&apos;s basics.
      </div>
      <div className="mousefollowing">
        <MouseFollowingDoomFace level={Math.ceil(Math.random() * 5) as LevelNumber} />
      </div>

      <div className="instructions">
        Move your mouse left and right from the face above.
        <br />
        The table below shows all the possible faces (not all used yet).
      </div>

      <table>
        <tbody>
          <tr>
            <td />
            {faces[0].split('').map((variant: any) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={variant}>{variant}</td>
            ))}
          </tr>
          {faces.map((variants, level) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={level}>
              <td>
                {level + 1}
              </td>
              {variants.split('').map((variant: any) => {
                const faceLevel: any = level + 1;
                return (
                  <td key={variant}>
                    <DoomFace
                      level={faceLevel}
                      variant={variant}
                    />
                  </td>
                );
              })}

              {variants.length < max && <td colSpan={max - variants.length} />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
