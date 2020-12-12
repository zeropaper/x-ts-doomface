import * as React from "react";
import "./styles.css";

import { DoomFace } from "./components/DoomFace/DoomFace";

export default function App() {
  const faces = [
    "abcdefgh",
    "abcdefgh",
    "abcdefgh",
    "abcdefgh",
    "abcdefgh",
    "ab"
  ];

  const max = Math.max(...faces.map((variants) => variants.length));

  return (
    <div className="App">
      <table>
        <tbody>
          {faces.map((variants, level) => (
            <tr key={level}>
              {variants.split("").map((variant) => (
                <td key={variant}>
                  <DoomFace level={level + 1} variant={variant} />
                </td>
              ))}

              {variants.length < max && <td colSpan={max - variants.length} />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
