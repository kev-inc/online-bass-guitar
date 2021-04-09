import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { play, stop } from "./Sound";

export default function App() {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);
  const handleKeyDown = (event) => {
    play(event.key);
  };
  const handleKeyUp = (event) => {
    stop(event.key);
  };
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>-</td>
            <td>=</td>
          </tr>
          <tr>
            <td>q</td>
            <td>w</td>
            <td>e</td>
            <td>r</td>
            <td>t</td>
            <td>y</td>
            <td>u</td>
            <td>i</td>
            <td>o</td>
            <td>p</td>
            <td>[</td>
            <td>]</td>
            <td>\</td>
          </tr>
          <tr>
            <td>a</td>
            <td>s</td>
            <td>d</td>
            <td>f</td>
            <td>g</td>
            <td>h</td>
            <td>j</td>
            <td>k</td>
            <td>l</td>
            <td>;</td>
            <td>'</td>
          </tr>
          <tr>
            <td>z</td>
            <td>x</td>
            <td>c</td>
            <td>v</td>
            <td>b</td>
            <td>n</td>
            <td>m</td>
            <td>,</td>
            <td>.</td>
            <td>/</td>
          </tr>
          <tr>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
