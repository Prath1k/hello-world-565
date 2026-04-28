const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let students = [];
let idCounter = 1;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const grade = document.getElementById("grade").value;

  const student = {
    id: idCounter++,
    name,
    age,
    grade
  };

  students.push(student);
  displayStudents();
  form.reset();
});

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach(student => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>
        <button class="delete-btn" onclick="deleteStudent(${student.id})">
          Delete
        </button>
      </td>
    `;

    studentList.appendChild(row);
  });
}

function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  displayStudents();
}
