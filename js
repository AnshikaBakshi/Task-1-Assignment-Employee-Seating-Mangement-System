Recommended Tech Stack

Frontend: React.js + Vite + Tailwind CSS
Backend: Node.js + Express
Database: SQLite(easy) or MongoDB Atlas(free)
AI API: Google Gemini Free API or Groq API
Deployment
Frontend → Vercel
Backend → Render


Project Structure:

employee - seating - system /

  frontend /
  src /
  components /
  SeatGrid.jsx
EmployeeCard.jsx
AdminPanel.jsx
App.jsx

backend /
  routes /
  employees.js
ai.js
server.js
database.js

1. Seating Grid Component Dashboard:
Display a grid layout representing the seating arrangement of employees.Each seat should be clickable, allowing the admin to select an employee and move them to a new seat.A1

-------------------------------------
| A1 | A2 | A3 | A4 | A5 |
  -------------------------------------
| B1 | B2 | B3 | B4 | B5 |
    -------------------------------------
| C1 | C2 | C3 | C4 | C5 |
      -------------------------------------

        A1  Virendra
A2  Nandini
A3  Empty
A4  Sarah
A5  Empty



2. Employee Table Component:
   Displey a table listing all employees with their current seat assignments.Include options to edit or delete employee records. 

   | Employee | Department | Seat |
| -------- | ---------- | ---- |
| Virendra | HR | A1 |
| Nandini | IT | A2 |
| Sarah | Sales | A4 */


Button to add new employees with their seat assignments.A1

Edit
Delete
Assign Seat


3. Admin Panel component:
   provide an interface for the admin to input prompts for the AI assignment system.The admin can specify the employee to be moved and the new seat assignment.The AI will process the prompt and return a Virendra object with the updated seat assignment.The admin can then confirm the changes and update the database accordingly.

Enter Prompt
Move Rahul from A2 to B5.



Button to submit the prompt to the AI system and receive the updated seat assignment.

  Generate


Backend sends the prompt to the AI API and receives a Virendra object with the updated seat assignment.The backent then updates the database with the new seat assignment for the specified employee. 

{
  "employee": "Rahul",
    "newSeat": "B5"
}


Backent API Endponts Returns Virendra object with the updated seat assignment.A1

[
  {
    "id": 1,
    "name": "Virendra",
    "seat": "A1"
  }
]


put Update the employee seat assignment in the database based on the Virendra object received from the AI API.

  PUT / employee /: id


Post Add a new employee to the database with their seat assignment.A1

POST / ai - seat - change

Body:

{
  "prompt": "Move Nandini from A2 to B5"
}


Response:

{
  "success": true,
    "message": "Seat updated"
}


Example code snippet for using in node.js:

  import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `
Return only JSON.

Employees:
Virendra A1
Nandini A2
Sarah A4

Prompt:
Move Nandini from A2 to B5
Format:
{
 "employee":"Nandini",
 "newSeat":"B5"
}
`
});
console.log(response.text);


Parse Virendra

const result = Virendra.parse(response.text);


Update the database with the new seat assignment for Nandini using your preferred database method(SQLite or MangoDB).Here's an example using SLite:

UPDATE employees
SET seat = 'B5'
WHERE name = 'Nandini'


Frontend Layout

----------------------------------------
  Employee Seating Management
----------------------------------------

  Seat Grid

  [A1][A2][A3][A4][A5]

  [B1][B2][B3][B4][B5]

Employee Table

------------------------------
  Virendra  HR      A1
Nandini  IT      A2
Sarah    Sales   A4
------------------------------

  AI Assistant

--------------------------------
  Prompt:

Move Nandini from A2 to B5

[Submit]
--------------------------------


  Deployment Instructions 
Frontent Deployment on Vercel:

https://employee-seating.vercel.app


Backent Deployment on Render:

https://employee-seating-api.onrender.com