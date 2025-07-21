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

  moveTo(newRow, newCol) {
    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= this.field.length ||
      newCol >= this.field[0].length
    ) {
      console.log(" ❌ You went out of bounds! Game over!");
      this.gameOver = true;
      return;
    }

    const nextStep = this.field[newRow][newCol];
    if (nextStep === hole) {
      console.log("😵‍💫 You fell into a hole! Game over!");
      this.gameOver = true;
    } else if (nextStep === hat) {
      console.log("🥳 You found the hat! You win!🤴🏻");
      this.gameOver = true;
    } else {
      this.positionRow = newRow;
      this.positionCol = newCol;
      this.field[newRow][newCol] = pathCharacter;
    }
  }

  moveUp() {
    this.moveTo(this.positionRow - 1, this.positionCol);
  }

  moveDown() {
    this.moveTo(this.positionRow + 1, this.positionCol);
  }

  moveLeft() {
    this.moveTo(this.positionRow, this.positionCol - 1);
  }

  moveRight() {
    this.moveTo(this.positionRow, this.positionCol + 1);
  }

  play() {
    while (!this.gameOver) {
      this.print();
      const direction = prompt("Which way? (u/d/l/r): ");

      switch (direction) {
        case "u": this.moveUp(); break;
        case "d": this.moveDown(); break;
        case "l": this.moveLeft(); break;
        case "r": this.moveRight(); break;
        default:
          console.log("❌ Invalid input. Use u/d/l/r only.");
      }
    }
  }

  static randomizeHatPosition(field) {
    let hatRow, hatCol;
    do {
      hatRow = Math.floor(Math.random() * field.length);
      hatCol = Math.floor(Math.random() * field[0].length);
    } while (
      field[hatRow][hatCol] === hole ||
      (hatRow === 0 && hatCol === 0)
    );

    field[hatRow][hatCol] = hat;
  }
}

// ใช้แผนที่ที่กำหนดไว้ แล้วเลือกสุ่มตำแหน่งหมวก
const customMap = [
  ["░","░","⭕","░","░"],
  ["░","⭕","░","░","░"],
  ["░","░","░","⭕","░"],
  ["⭕","░","░","░","░"],
];

Field.randomizeHatPosition(customMap);
const myField = new Field(customMap);
myField.play();
