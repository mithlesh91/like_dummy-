import dotenv from "dotenv"
dotenv.config()
import { app } from "./src/app.js"
import { database } from "./src/config/database.js"

await database()
app.listen(3000,()=>{
   console.log("server is runnig port numb 3000")
})
  

