"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });
// Thinking Process
// 1.วางแผนก่อนเริ่มเขียน: ให้ผู้เล่นเดินหลบ “หลุม (O)” เพื่อไปหา “หมวก(^)”
// โดยผู้เล่นเริ่มจากตำแหน่งเริ่มต้น (actor) ซึ่งเดิมทีอยู่ที่ (0,0) แต่เราจะสุ่มให้เป็นตำแหน่งอื่นภายหลัง(ที่ไม่ตรงกับหลุมหรือหมวก)
// 2.เขียนคลาส Field พร้อม method
// --->>> สร้าง constructor() เพื่อกำหนดแผนที่เริ่มต้นและตำแหน่งของผู้เล่น
// --->>>สร้าง method สำหรับการเคลื่อนไหว: moveUp(), moveDown(), moveLeft(), moveRight()
// 3.สร้างฟังก์ชัน print() เพื่อแสดง map เป็นข้อความ อ่านง่ายขึ้นใน console
// 4.สร้างหลูปเกมผ่านฟังก์ชัน play() เพื่อให้ผู้เล่นพิมพ์คำสั่งเดิน (U = Up/ D=Down /L=Left /R=Right) ไปทีละตา
// 5.ในแต่ละคำสั่งเดิน ให้เรียก method เดินที่ตรงกับทิศทาง เพื่ออัปเดตตำแหน่ง
// 6.ตรวจสอบ 3 กรณีในทุกการเดิน:
// --->>>ชนะ = เดินไปเจอหมวก
// --->>>แพ้ = เดินไปตกหลุม
// --->>>เดินออกนอกแผนที่ field = ต้องเตือนว่า “Out of map ❌” และจบเกม
// 7.สร้างฟังก์ชัน generateField()
// ---สุ่มตำแหน่งของ หลุม (holes) ตามเปอร์เซ็นต์
// ---สุ่มตำแหน่ง หมวก (hat) โดยไม่ซ้ำกับตำแหน่งของผู้เล่น
// ---สุ่มตำแหน่ง actor (ผู้เล่น) โดยไม่ให้ซ้ำกับหลุมหรือหมวก
// ---ส่งคืนทั้งแผนที่และตำแหน่งเริ่มต้นของผู้เล่นให้ constructor ใช้งาน

const hat = "👑";
const hole = "⭕";
const fieldCharacter = "░";
const pathCharacter = "*";
class Field {
  constructor(field, startRow = 0, startCol = 0) {
    this.field = field;
    this.positionRow = startRow;
    this.positionCol = startCol;
    this.field[this.positionRow][this.positionCol] = pathCharacter;
  }
}
	// Print field //
	print() {console.clear();
    const displayString = this.field.map(row => row.join("")).join("\n");
    console.log(displayString);
  }
 play() {
    while (!this.gameOver) {
      this.print();
// 📦 สร้างเกมจาก field แบบกำหนดเอง
const newGame = new Field([
  ["░", "░", "⭕"],
  ["░", "⭕", "░"],
  ["░", "👑", "░"],
], 0, 0); // เริ่มต้นที่แถว 0, คอลัมน์ 0

newGame.print();