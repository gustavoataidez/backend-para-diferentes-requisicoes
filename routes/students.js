const express = require("express");
const router = express.Router();

let students = [
  {
    matricula: "20241000",
    nome: "João Carlos",
    email: "joao@exemplo.com",
    dataNascimento: "2000-03-15",
  },
  {
    matricula: "24240102",
    nome: "José Marinho",
    email: "jose@exemplo.com",
    dataNascimento: "2000-05-24",
  },
  {
    matricula: "24240301",
    nome: "Luciana Fernandes",
    email: "lucaina@exemplo.com",
    dataNascimento: "2001-05-15",
  },
];

// Helper functions
const findStudent = (matricula, email) =>
  students.find((s) => s.matricula === matricula || s.email === email);

const findStudentIndex = (matricula) =>
  students.findIndex((s) => s.matricula === matricula);

// GET students listing
router.get("/", (req, res) => {
  res.status(200).json({ students });
});

// POST new student
router.post("/", (req, res) => {
  const student = req.body;

  if (!student || !student.matricula || !student.email) {
    return res.status(400).json({ error: "Dados do aluno inválidos" });
  }

  if (findStudent(student.matricula, student.email)) {
    return res.status(409).json({ error: "Aluno já cadastrado" });
  }

  students.push(student);
  res
    .status(201)
    .render("success", { message: "Aluno cadastrado com sucesso!" });
});

// PUT update student
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedStudent = req.body;

  if (!updatedStudent || !updatedStudent.matricula || !updatedStudent.email) {
    return res.status(400).json({ error: "Dados do aluno inválidos" });
  }

  const studentIndex = findStudentIndex(id);

  if (studentIndex === -1) {
    return res.status(404).json({ error: "Aluno não encontrado" });
  }

  const existingStudent = findStudent(null, updatedStudent.email);
  if (existingStudent && existingStudent.matricula !== id) {
    return res.status(409).json({ error: "Email já em uso" });
  }

  students[studentIndex] = { ...students[studentIndex], ...updatedStudent };
  res.render("success", { message: "Aluno atualizado com sucesso!" });
});

// DELETE student
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const initialLength = students.length;
  students = students.filter((s) => s.matricula !== id);

  if (students.length === initialLength) {
    return res.status(404).json({ error: "Aluno não encontrado" });
  }

  res.render("success", { message: "Aluno removido com sucesso!" });
});

module.exports = router;
