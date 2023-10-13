import Tasks from "../models/Task";
export const renderTask = async (req, res) => {
    // res.send("<h1>Hello World</h1>");--> cuando enviamos texto
    // cuando renderizamos un archivo
  
    const tasks = await Tasks.find().lean();
    //console.log(tasks);
    res.render("index", { tasks: tasks });
  }

export const createTask = async (req, res) => {
    try {
      const task = Tasks(req.body);
      await task.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }  
export const renderTaskEdit =  async (req, res) => {
    //console.log(req.params.id);
    try {
      const task = await Tasks.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (error) {
      console.log(error);
    }
  }  

export const editTask = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    await Tasks.findByIdAndUpdate(id, req.body);
    //res.send("recibido")
    res.redirect("/");
  } 

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Tasks.findByIdAndDelete(id);
    res.redirect("/");
  } 

export const toogleTask =async (req, res) => {
    const { id } = req.params;
  
    const task = await Tasks.findById(id);
    //console.log(task);
    task.done = !task.done
    await task.save();
    //res.send("togle");
    res.redirect('/')
  };
 