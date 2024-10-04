var express = require('express');
var router = express.Router();

var students = [
    { matricula: '20241000', nome: 'João Carlos', email: 'joao@exemplo.com', dataNascimento: '2000-03-15' },
    { matricula: '24240102', nome: 'José Marinho', email: 'jose@exemplo.com', dataNascimento: '2000-05-24' },
    { matricula: '24240301', nome: 'Luciana Fernandes', email: 'lucaina@exemplo.com', dataNascimento: '2001-05-15' }
]

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({students});
});

/* POST students listing. */
router.post('/', function(req, res, next) {
    const student = req.body

    const isStudentAdded = students.find(s => s.matricula === student.matricula || s.email === student.email)

    if(isStudentAdded){
        console.log("ta por aqui!!")
        res.send("Student is registered in our system!")
        return
    }

    if(student){
        students.push(student)
        res.status(201)
        return
    }
  res.send("no body received")
});
/* PUT students listing. */
router.put('/:id', function(req, res, next) {

    const {id} = req.params
    const student = req.body


    try {
        students.splice(id-1, 1,student)
        res.status(200)
        
    } catch (error) {
        res.status(500).send("Error to delete student")
    }

  res.status(500);
});
/* DELETE students listing. */
router.delete('/:id', function(req, res, next) {
    const {id} = req.params


    try {
        students.splice(id-1, 1)
        res.status(200)
        
    } catch (error) {
        res.status(500).send("Error to delete student")
    }
});

module.exports = router;
