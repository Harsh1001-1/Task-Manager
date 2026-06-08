const express = require("express");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  toggleTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);
router.patch("/:id/toggle", toggleTask);
module.exports = router;