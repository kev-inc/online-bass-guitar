import e_1 from "./assets/e1.mp3";
import e_2 from "./assets/e2.mp3";
import e_3 from "./assets/e3.mp3";
import e_4 from "./assets/e4.mp3";
import e_5 from "./assets/e5.mp3";
import a_1 from "./assets/a1.mp3";
import a_2 from "./assets/a2.mp3";
import a_3 from "./assets/a3.mp3";
import a_4 from "./assets/a4.mp3";
import a_5 from "./assets/a5.mp3";
import d_1 from "./assets/d1.mp3";
import d_2 from "./assets/d2.mp3";
import d_3 from "./assets/d3.mp3";
import d_4 from "./assets/d4.mp3";
import d_5 from "./assets/d5.mp3";
import g_1 from "./assets/g1.mp3";
import g_2 from "./assets/g2.mp3";
import g_3 from "./assets/g3.mp3";
import g_4 from "./assets/g4.mp3";
import g_5 from "./assets/g5.mp3";
import g_6 from "./assets/g6.mp3";
import g_7 from "./assets/g7.mp3";
import g_8 from "./assets/g8.mp3";
import g_9 from "./assets/g9.mp3";
import g_10 from "./assets/g10.mp3";
import g_11 from "./assets/g11.mp3";
import g_12 from "./assets/g12.mp3";

const e1 = new Audio(e_1);
const e2 = new Audio(e_2);
const e3 = new Audio(e_3);
const e4 = new Audio(e_4);
const e5 = new Audio(e_5);
const e6 = new Audio(a_1);
const e7 = new Audio(a_2);
const e8 = new Audio(a_3);
const e9 = new Audio(a_4);
const e10 = new Audio(a_5);

const a1 = new Audio(a_1);
const a2 = new Audio(a_2);
const a3 = new Audio(a_3);
const a4 = new Audio(a_4);
const a5 = new Audio(a_5);
const a6 = new Audio(d_1);
const a7 = new Audio(d_2);
const a8 = new Audio(d_3);
const a9 = new Audio(d_4);
const a10 = new Audio(d_5);
const a11 = new Audio(g_1);

const d1 = new Audio(d_1);
const d2 = new Audio(d_2);
const d3 = new Audio(d_3);
const d4 = new Audio(d_4);
const d5 = new Audio(d_5);
const d6 = new Audio(g_1);
const d7 = new Audio(g_2);
const d8 = new Audio(g_3);
const d9 = new Audio(g_4);
const d10 = new Audio(g_5);
const d11 = new Audio(g_6);
const d12 = new Audio(g_7);
const d13 = new Audio(g_8);

const g1 = new Audio(g_1);
const g2 = new Audio(g_2);
const g3 = new Audio(g_3);
const g4 = new Audio(g_4);
const g5 = new Audio(g_5);
const g6 = new Audio(g_6);
const g7 = new Audio(g_7);
const g8 = new Audio(g_8);
const g9 = new Audio(g_9);
const g10 = new Audio(g_10);
const g11 = new Audio(g_11);
const g12 = new Audio(g_12);

const playNote = (note) => {
  note.paused && note.play()
};

const stopNote = (note) => {
  !note.paused && note.pause();
  note.currentTime = 0;
};

export const play = (key) => {
  switch (key) {
    case "z":
      playNote(e1);
      break;
    case "x":
      playNote(e2);
      break;
    case "c":
      playNote(e3);
      break;
    case "v":
      playNote(e4);
      break;
    case "b":
      playNote(e5);
      break;
    case "n":
      playNote(e6);
      break;
    case "m":
      playNote(e7);
      break;
    case ",":
      playNote(e8);
      break;
    case ".":
      playNote(e9);
      break;
    case "/":
      playNote(e10);
      break;
    case "a":
      playNote(a1);
      break;
    case "s":
      playNote(a2);
      break;
    case "d":
      playNote(a3);
      break;
    case "f":
      playNote(a4);
      break;
    case "g":
      playNote(a5);
      break;
    case "h":
      playNote(a6);
      break;
    case "j":
      playNote(a7);
      break;
    case "k":
      playNote(a8);
      break;
    case "l":
      playNote(a9);
      break;
    case ";":
      playNote(a10);
      break;
    case "'":
      playNote(a11);
      break;
    case "q":
      playNote(d1);
      break;
    case "w":
      playNote(d2);
      break;
    case "e":
      playNote(d3);
      break;
    case "r":
      playNote(d4);
      break;
    case "t":
      playNote(d5);
      break;
    case "y":
      playNote(d6);
      break;
    case "u":
      playNote(d7);
      break;
    case "i":
      playNote(d8);
      break;
    case "o":
      playNote(d9);
      break;
    case "p":
      playNote(d10);
      break;
    case "[":
      playNote(d11);
      break;
    case "]":
      playNote(d12);
      break;
    case "\\":
      playNote(d13);
      break;
    case "1":
      playNote(g1);
      break;
    case "2":
      playNote(g2);
      break;
    case "3":
      playNote(g3);
      break;
    case "4":
      playNote(g4);
      break;
    case "5":
      playNote(g5);
      break;
    case "6":
      playNote(g6);
      break;
    case "7":
      playNote(g7);
      break;
    case "8":
      playNote(g8);
      break;
    case "9":
      playNote(g9);
      break;
    case "0":
      playNote(g10);
      break;
    case "-":
      playNote(g11);
      break;
    case "=":
      playNote(g12);
      break;
    default:
      break;
  }
};

export const stop = (key) => {
  switch (key) {
    case "z":
      stopNote(e1);
      break;
    case "x":
      stopNote(e2);
      break;
    case "c":
      stopNote(e3);
      break;
    case "v":
      stopNote(e4);
      break;
    case "b":
      stopNote(e5);
      break;
    case "n":
      stopNote(e6);
      break;
    case "m":
      stopNote(e7);
      break;
    case ",":
      stopNote(e8);
      break;
    case ".":
      stopNote(e9);
      break;
    case "/":
      stopNote(e10);
      break;
    case "a":
      stopNote(a1);
      break;
    case "s":
      stopNote(a2);
      break;
    case "d":
      stopNote(a3);
      break;
    case "f":
      stopNote(a4);
      break;
    case "g":
      stopNote(a5);
      break;
    case "h":
      stopNote(a6);
      break;
    case "j":
      stopNote(a7);
      break;
    case "k":
      stopNote(a8);
      break;
    case "l":
      stopNote(a9);
      break;
    case ";":
      stopNote(a10);
      break;
    case "'":
      stopNote(a11);
      break;
    case "q":
      stopNote(d1);
      break;
    case "w":
      stopNote(d2);
      break;
    case "e":
      stopNote(d3);
      break;
    case "r":
      stopNote(d4);
      break;
    case "t":
      stopNote(d5);
      break;
    case "y":
      stopNote(d6);
      break;
    case "u":
      stopNote(d7);
      break;
    case "i":
      stopNote(d8);
      break;
    case "o":
      stopNote(d9);
      break;
    case "p":
      stopNote(d10);
      break;
    case "[":
      stopNote(d11);
      break;
    case "]":
      stopNote(d12);
      break;
    case "\\":
      stopNote(d13);
      break;

    case "1":
      stopNote(g1);
      break;
    case "2":
      stopNote(g2);
      break;
    case "3":
      stopNote(g3);
      break;
    case "4":
      stopNote(g4);
      break;
    case "5":
      stopNote(g5);
      break;
    case "6":
      stopNote(g6);
      break;
    case "7":
      stopNote(g7);
      break;
    case "8":
      stopNote(g8);
      break;
    case "9":
      stopNote(g9);
      break;
    case "0":
      stopNote(g10);
      break;
    case "-":
      stopNote(g11);
      break;
    case "=":
      stopNote(g12);
      break;
    default:
      break;
  }
};
