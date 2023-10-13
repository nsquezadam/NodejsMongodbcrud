import { Router } from "express";

const router = Router();
import {
  renderTask,
  createTask,
  editTask,
  renderTaskEdit,
  deleteTask,
  toogleTask,
} from "../controllers/task.controller";

router.get("/", renderTask);

router.post("/task/add", createTask);

// router.put('/edit/:id', (req, res)=>{
//       //res.send("editando")
//       const {id} = req.params
//       const {title, description} = req.body
//       Tasks.updateOne({_id:id},{$set:{title,description}})
//             .then((data) => res.json(data))
//             .catch((error)=> res.json({message:error}))

// })

router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toogleDone", toogleTask);

router.get("/about", (req, res) => {
  res.render("about");
});

export default router;
