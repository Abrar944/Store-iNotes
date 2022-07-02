const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/Fetch");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Routers 1:-   Get All The Notes
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("send Error Occured");
  }
});
//Routers 2:-   Add New Notes All The Notes
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter the Valid Title").isLength({ min: 3 }),
    body("description", "Enter Brief Description ").isLength({ min: 5 }),
    body("tag", "Enter the tag ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      //if there are errors, return bad request and the errors
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      var note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("send Error Occured");
    }
  }
);
//Routers 3:-   Update  New Notes All The Notes
router.put("/update/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  //Create a newNote obj to update the notes
  const newNotes = {};
  if (title) {
    newNotes.title = title;
  }
  if (description) {
    newNotes.description = description;
  }
  if (tag) {
    newNotes.tag = tag;
  }
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNotes },
    { new: true }
  );
  res.json({ note });
});
//Routers 4:-   Deleteing Notes The Notes Api
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  //Find the Note to delete and delete it
  let note = await Notes.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not Found");
  }
  //Allowed The Deletion only id the user is auth to that
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed");
  }
  note = await Notes.findByIdAndDelete(req.params.id);
  res.json({ 'Success': "Notes has been deleted",note: note });
});

module.exports = router;
