const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
} = require("../Controlla/content");

const router = express.Router();
router.get("/", getAllContents);
router.get("/:id", getSingleContent);
router.post("/", postContent);

module.exports = router;
