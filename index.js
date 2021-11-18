const express = require("express")
const dotenv = require("dotenv")
const todosRouter = require("./routers/routes/todos")

const app = express();


dotenv.config();
const db = require("./db/db");


const PORT = process.env.PORT;




//// app level middleware
app.use(express.json());
app.use("/todos", todosRouter);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
