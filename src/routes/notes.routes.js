const { Router } = require("express");
const router = new Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote
} = require("../controllers/notes.controller");

//New note
router.get("/notes/add", renderNoteForm); // get es para pedir o solicitar datos
router.post("/notes/new-note", createNewNote); // pots para crear datos o crear algo nuevp

//Get all note
router.get("/notes", renderNotes);

//Edit Notes
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", updateNote);  // actualizar algo que ya existe metodo put

//Delete Notes
router.delete("/notes/delete/:id", deleteNote); //eliminar datos
module.exports = router;
