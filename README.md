# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process

1. // step 1 ปุ้ยกำหนดสัญลักษณ์ที่ใช้ในเกม เช่น หมวก (hat), หลุม (hole), พื้นที่ว่าง (fieldCharacter), ทางเดิน (pathCharacter), ผู้เล่น (playerCharacter) สัญลักษณ์เหล่านี้จะถูกใช้ในแผนที่เพื่อแสดงสถานะต่างๆ
2.สร้างแผนที่ (Map) ในรูปแบบ Array 2 มิติ แผนที่จะเก็บข้อมูลเป็น array ของ array (เช่น field[row][col])
-แต่ละช่องในแผนที่จะเก็บค่าสัญลักษณ์หนึ่งตัว
-ตัวอย่างแผนที่เริ่มต้นสร้างไว้ในตัวแปร customMap
-สร้างคลาส Field เพื่อเก็บข้อมูลเกมนี้
3.constructor(field) รับแผนที่เป็นพารามิเตอร์และเก็บไว้ใน this.field
-กำหนดตำแหน่งเริ่มต้นผู้เล่น (row=0, col=0)
-กำหนดสถานะ gameOver เพื่อเช็คสถานะเกม
-กำหนดตำแหน่งเริ่มต้นในแผนที่เป็นทางเดิน (pathCharacter)
4.สร้าง method print() เพื่อแสดงแผนที่
-ใช้ clear-screen = clear() ล้างหน้าจอก่อน
-คัดลอกแผนที่และแทรกตำแหน่งผู้เล่นลงในแผนที่ที่จะแสดง
-แปลง array เป็น string และพิมพ์ออกทาง console
5.สร้าง method moveTo(newRow, newCol) เพื่อเคลื่อนที่ผู้เล่น
-ตรวจสอบว่าการเคลื่อนที่ไม่ออกนอกขอบแผนที่
-เช็คว่าช่องเป้าหมายเป็นหลุม, หมวก หรือช่องว่าง
-กรณีถ้าเปHนหลุมหรือออกนอกขอบแสดงข้อความและเกมจบ
-กรณีเจอหมวกแสดงข้อความชนะ
-กรณีช่องว่างให้อัพเดตตำแหน่งผู้เล่น และเปลี่ยนช่องในแผนที่เป็นทางเดิน (pathCharacter)
ุ6.สร้าง method ย่อยเพื่อเคลื่อนที่ในแต่ละทิศทาง
-moveUp(), moveDown(), moveLeft(), moveRight()
-เรียกใช้ moveTo พร้อมปรับตำแหน่งตามทิศทาง
7.สร้าง method play() เพื่อเล่นเกมในลูป
-ให้วนลูปจนกว่า gameOver จะเป็น true
-แสดงแผนที่ด้วย print()
-รับคำสั่งจากผู้เล่น (u/d/l/r) ผ่าน prompt
-สั่งเคลื่อนที่ตามทิศทางที่เลือก
-แจ้งเตือนหากคำสั่งไม่ถูกต้อง
8.สร้าง static method randomizeHatPosition(field)
-ทำหน้าที่สุ่มตำแหน่งหมวกใหม่ในแผนที่
-ตรวจสอบไม่ให้วางบนหลุม หรือที่จุดเริ่มต้น (0,0)
-เปลี่ยนสัญลักษณ์ช่องที่สุ่มได้เป็นหมวก
9.เรียกใช้งานเกม ตามคำสั่ง
-สร้างแผนที่เริ่มต้น (customMap)
-เรียก randomizeHatPosition เพื่อสุ่มตำแหน่งหมวกใหม่
-สร้างอินสแตนซ์ของคลาส Field ด้วยแผนที่ที่ได้
-เรียก play() เพื่อเริ่มเล่นเกม


_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
