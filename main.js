"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "👑";
const hole = "⭕";
const fieldCharacter = "░";
const pathCharacter = "*";
const playerCharacter = "🤠";

	// Your Code //
class Field {
  constructor(field) {
    this.field = field;
    this.positionRow = 0;
    this.positionCol = 0;
    this.gameOver = false;
    this.field[0][0] = pathCharacter;
  }

  print() {
    clear();
    const displayField = this.field.map((row) => [...row]);
    displayField[this.positionRow][this.positionCol] = playerCharacter;
    const display = displayField.map((row) => row.join("")).join("\n");
    console.log(display);
  }

  play() {
    while (!this.gameOver) {
      this.print();
      const direction = prompt("Which way? (u/d/l/r): ");

      switch (direction) {
        case "u":
          this.positionRow--;
          break;
        case "d":
          this.positionRow++;
          break;
        case "l":
          this.positionCol--;
          break;
        case "r":
          this.positionCol++;
          break;
        default:
          console.log("❌ Invalid input. Use u/d/l/r only.");
          continue;
      }

      if (
        this.positionRow < 0 ||
        this.positionCol < 0 ||
        this.positionRow >= this.field.length ||
        this.positionCol >= this.field[0].length
      ) {
        console.log("🚫 You went out of bounds! Game over!");
        this.gameOver = true;
        break;
      }

      const current = this.field[this.positionRow][this.positionCol];
      if (current === hole) {
        console.log("💥 You fell into a hole! Game over!");
        this.gameOver = true;
      } else if (current === hat) {
        console.log("🎉 You found the hat! You win!");
        this.gameOver = true;
      } else {
        this.field[this.positionRow][this.positionCol] = pathCharacter;
      }
    }
  }
}
const customMap = [
  ["░","░","⭕","░","░"],
  ["░","⭕","░","░","░",],
  ["░","░","░","⭕","░",],
  ["░","░","░","👑","░","░"],
];

const myField = new Field(customMap);
myField.play();
